FROM node:18-alpine3.17
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npx prisma generate --schema=./src/prisma/schema.prisma
EXPOSE 3000
RUN npm install -g ts-node

CMD ["ts-node", "/usr/src/app/src/index.ts"]

