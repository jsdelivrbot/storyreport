FROM node:8
EXPOSE 5000

WORKDIR /app
ADD . /app

RUN mv /app/config/config.docker.json /app/config/config.dev.json

RUN npm i

#ADD ./node_modules/h5recorder /app/node_modules/h5recorder

# RUN apk update
# RUN apk add npm


#VOLUME /app/node_modules/h5recorder

CMD npm start
