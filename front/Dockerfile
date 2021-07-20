FROM node:10.16
LABEL maintainer="Valentin Crozet <valentin@ermes.ai>"


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --production

# Bundle app source
COPY . .


CMD [ "npm", "run", "start" ]
EXPOSE 8080