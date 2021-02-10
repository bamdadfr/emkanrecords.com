# build
FROM node:lts-alpine AS build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# production dependencies
FROM node:lts-alpine AS dependencies

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# serve
FROM node:lts-alpine
LABEL maintainer="Bamdad Sabbagh <devops@bamdadsabbagh.com>"

WORKDIR /app
ENV NODE_ENV=production

# COPY --from=builder /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=dependencies /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]