FROM node:14

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install python
RUN apt-get update || : && apt-get install python -y

# Install node packages
RUN npm install

# Copy folder to docker route
COPY . .

EXPOSE 80
CMD [ "node", "index.js" ]