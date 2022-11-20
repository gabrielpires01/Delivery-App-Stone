
FROM node:alpine

WORKDIR /app
COPY . ./

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm run build