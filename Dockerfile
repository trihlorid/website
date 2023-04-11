FROM node:14

WORKDIR /app

COPY package*.json /app/
RUN npm i 

COPY . /app
RUN chown -R node:node .

USER node
RUN npm run build
CMD npm run start