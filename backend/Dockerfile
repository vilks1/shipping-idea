FROM node:18.11.0-alpine3.16
WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm i

COPY --chown=node:node . .