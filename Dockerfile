# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# install forever to run the project
RUN npm install -g forever

COPY . .
# run the build command for the project
RUN ls && npm run build






# Expose the port the app runs on
EXPOSE 3001

# Command to run the app
CMD [ "forever", "server.js" ]