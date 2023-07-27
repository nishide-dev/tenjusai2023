# FROM --platform=linux/amd64 node:16
# # Installing libvips-dev for sharp Compatability
# RUN apt-get update && apt-get install libvips-dev -y
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /opt/
# COPY ./package.json ./
# ENV PATH /opt/node_modules/.bin:$PATH
# RUN npm config set network-timeout 600000 -g && npm install
# WORKDIR /opt/app
# COPY ./ .
# RUN npm run build
# EXPOSE 1337
# CMD ["npm", "run", "develop"]

# path: ./Dockerfile.prod

FROM --platform=linux/amd64 node:16-buster as build

# Installing libvips for sharp compatibility
RUN apt-get update && apt-get install -y build-essential libvips-dev

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH

RUN npm config set network-timeout 600000 -g && npm install

WORKDIR /opt/app
COPY ./ .
RUN npm run build

FROM node:16-buster

# Install libvips
RUN apt-get update && apt-get install -y libvips-dev

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/app ./

EXPOSE 1337
CMD ["npm", "run", "start"]
