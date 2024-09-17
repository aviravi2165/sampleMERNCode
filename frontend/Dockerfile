# STAGE1
FROM node:21 AS frontend-builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# STAGE2
FROM node:21-slim
WORKDIR /usr/src/app
COPY --from=frontend-builder /usr/src/app .
EXPOSE 3000
CMD ["npm","start"]
