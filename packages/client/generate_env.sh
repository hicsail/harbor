#!/bin/bash

# Recreate config file
rm -f /usr/share/nginx/html/env-config.js
touch /usr/share/nginx/html/env-config.js

# Add assignment
echo "window._env_ = {" >> /usr/share/nginx/html/env-config.js

echo "Starting to process environment variables..."
# Iterate through all environment variables
for varname in $(compgen -e); do
  echo "Found variable: $varname"
  # Skip variables that don't start with VITE_
  if [[ "${varname:0:5}" != "VITE_" ]]; then
    continue
  fi
  echo "Processing $varname" # More detailed debugging line
  # Read value of current variable
  value="${!varname}"

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> /usr/share/nginx/html/env-config.js
done

echo "}" >> /usr/share/nginx/html/env-config.js
echo "Done generating env-config.js file"
