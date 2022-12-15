# Build
FROM node:18.12.1-alpine3.16 AS build

WORKDIR /build

COPY package*.json ./
COPY apps apps
COPY libs libs

RUN npm ci
RUN npm run build --workspace=apps/frontend/web

# Production
FROM alpine:3.17.0

ENV NODE_ENV production

WORKDIR /app

COPY --from=build /build/apps/frontend/web/dist ./

CMD ["tail","-f", "/dev/null"]