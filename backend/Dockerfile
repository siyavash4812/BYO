FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /
COPY wait-for-it.sh /wait-for-it.sh
EXPOSE 80

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]