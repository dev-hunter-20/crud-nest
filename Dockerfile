# Use official Node.js 18 image as base
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["yarn", "start:prod"]
