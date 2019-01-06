FROM node:10

LABEL maintainer="https://github.com/bijayee-saswata"

WORKDIR /usr/src/web

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm" , "start"]


