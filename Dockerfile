# Dockerfile
# Specify the base image for your application
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
# This step is cached, speeding up future builds if dependencies haven't changed
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the working directory
COPY . .

# Specify the command to run when the container starts
CMD ["npm", "start"]
