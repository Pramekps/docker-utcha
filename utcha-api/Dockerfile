FROM node:16

WORKDIR /utcha-api
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD yarn start
