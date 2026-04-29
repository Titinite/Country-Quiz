FROM node:20

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/src ./src
COPY frontend/public ./public
COPY frontend/index.html .
COPY frontend/vite.config.ts .
COPY frontend/tsconfig*.json ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]