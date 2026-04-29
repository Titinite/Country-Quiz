FROM node:20

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend/src ./src
COPY backend/index.js .

EXPOSE 3000

CMD ["node", "index.js"]