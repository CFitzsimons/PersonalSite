FROM node:0.12
MAINTAINER tribou

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Build the app
RUN npm start build

# Expose the app port
EXPOSE 80

# Start the app
CMD npm start
