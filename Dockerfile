# Client App
FROM node:lts-alpine as client-app
LABEL authors="John Papa"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
COPY . .
ARG VUE_APP_API
ENV VUE_APP_API $VUE_APP_API
RUN npm run build

# Node server
FROM node:lts-alpine as node-server
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production --silent && mv node_modules ../
COPY server.js .
COPY /server /usr/src/app/server

# Final image
FROM node:lts-alpine
WORKDIR /usr/src/app
# get the node server
COPY --from=node-server /usr/src /usr/src
# get the client app
COPY --from=client-app /usr/src/app/dist ./dist
EXPOSE 9000
CMD ["node", "server.js"]
