# Build
FROM node:18.12.1-alpine3.16 AS build

WORKDIR /build

COPY package*.json ./
COPY apps apps
COPY libs libs

RUN npm ci
RUN npm run build --workspace=apps/backend/api

# Production
FROM node:18.12.1-alpine3.16

ENV NODE_ENV production

WORKDIR /app

COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/apps/backend/api/node_modules ./apps/backend/api/node_modules
COPY --from=build /build/apps/backend/api/dist ./apps/backend/api/dist

CMD ["node","./apps/backend/api/dist/main.js"]