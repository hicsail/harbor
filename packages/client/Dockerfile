FROM node:18-alpine as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM nginx as production

WORKDIR /usr/src/app

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
COPY generate_env.sh /

CMD ["/bin/bash", "-c", "/generate_env.sh && nginx -g 'daemon off;'"]