FROM node:18.12.1-alpine3.16

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY apps apps
COPY libs libs

RUN npm ci
RUN npm run build --workspace=apps/frontend/web