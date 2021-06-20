FROM node:lts-buster-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --quiet --no-progress

COPY src ./src

EXPOSE 3000

CMD [ "npm", "start" ]