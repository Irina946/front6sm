FROM node:20

WORKDIR /app

COPY package*.json .

RUN npm install --force
RUN chown -R node:node node_modules

COPY . .

EXPOSE 80

CMD [ "npm", "run", "dev" ]