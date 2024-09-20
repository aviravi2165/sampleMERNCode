#Stage1
FROM node:21 AS backend-builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN npm run test

#Stage2
FROM node:21-slim
WORKDIR /usr/src/app
ENV TERM=xterm
COPY --from=backend-builder /usr/src/app .
EXPOSE 8080
CMD ["npm","run", "dev"]
