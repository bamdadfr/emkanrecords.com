FROM node:alpine

#WORKDIR /app
#
#COPY package.json yarn.lock ./
#RUN yarn install --pure-lockfile --no-progress
#
#COPY .next ./
#
#EXPOSE 3000
#CMD ["yarn", "start"]

#
#COPY . ./
#RUN yarn build
#
#EXPOSE 3000
#CMD ["yarn", "start"]

COPY . /app
WORKDIR /app

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]