FROM node:alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile --no-progress

COPY . ./
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
