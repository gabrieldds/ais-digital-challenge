FROM node:lts-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json yarn.* ./

RUN yarn

COPY . .

COPY --chown=node:node . .

USER node

#RUN chmod +x init.sh

EXPOSE 3000

ENTRYPOINT ./init.sh