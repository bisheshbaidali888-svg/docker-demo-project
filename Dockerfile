FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=pass

RUN mkdir -p /home/app

COPY . /home/app


WORKDIR /home/app


RUN npm install

CMD ["node", "server.js"]
