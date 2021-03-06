FROM basaltinc/docker-node-php-base:develop
WORKDIR /app/examples/bootstrap
COPY . .
RUN npm install && npm run build
EXPOSE 3999

CMD npm run serve
