FROM node:18.12.1-alpine3.16

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY apps apps
COPY libs libs

RUN npm ci
RUN npm run build --workspace=apps/backend/api
CMD ["node","./apps/backend/api/dist/main.js"]
# CMD tail -f /dev/null