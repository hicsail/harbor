#!/bin/bash

# Recreate config file
rm -f ./env-config.js
touch ./env-config.js

# Add assignment
echo "window._env_ = {" >> ./env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while IFS= read -r line || [[ -n "$line" ]];
do
  # Skip empty lines and comments
  if [[ -z "$line" || "$line" =~ ^[[:space:]]*# ]]; then
    continue
  fi

  # Split env variables by character `=`
  if [[ "$line" == *=* ]]; then
    varname="${line%%=*}"
    varvalue="${line#*=}"
  else
    # Handle lines without an equal sign (invalid format)
    echo "Invalid line in .env file: $line"
    continue
  fi

  # Read value of current variable if exists as Environment variable
  value="${!varname}"

  # Otherwise use value from .env file
  [[ -z "$value" ]] && value="$varvalue"

  # Append configuration property to JS file if the key starts with VITE_
  if [[ "${varname:0:5}" == "VITE_" ]]; then
    echo "  $varname: \"$value\"," >> ./env-config.js
  fi

done < .env

echo "}" >> ./env-config.js
echo "Done generating env.json file"