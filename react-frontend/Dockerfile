# Use the official Node.js image for the build stage
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Set the environment variable to use OpenSSL legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./ 

# Install dependencies
RUN yarn install

# Copy all source files
COPY . .

# Build the React app for production
RUN yarn build

# Use Nginx to serve the React app
FROM nginx:alpine

# Copy the build folder from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port for the frontend
EXPOSE 80

# Start Nginx (Nginx serves the React app)
CMD ["nginx", "-g", "daemon off;"]
