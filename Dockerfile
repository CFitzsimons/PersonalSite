FROM node:0.12
MAINTAINER Yulfy

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Build the app
RUN npm start build

# Grab server
RUN npm install -g serve

# Start the app
CMD npm start

# Expose the app port
EXPOSE 80
