FROM node:16
# Installing libvips-dev for sharp compatability
#RUN apt-get update && apt-get install libvips-dev
RUN apt-get update && apt-get install libvips libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
COPY ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN npm install @mui/x-date-pickers
RUN npm install @tiptap/pm
RUN yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]
