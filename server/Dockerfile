# Server dockerfile
FROM node:24-alpine3.21
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 82
CMD ["sh", "./run.sh"]