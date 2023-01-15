FROM node:16.13.0-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --ignore-optional --production
COPY . .
RUN apk --update add tzdata
RUN cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime
EXPOSE 3000
