FROM node:18-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM nginx as production

WORKDIR /usr/src/app

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY generate_env.sh /
# COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/generate_env.sh && nginx -g \"daemon off;\""]
