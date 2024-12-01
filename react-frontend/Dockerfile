# Use the official Node.js image for the build
FROM node:18 as build

# Set working directory
WORKDIR /app-React

# Copy package.json and yarn.lock (or package-lock.json if you're using npm)
COPY package.json yarn.lock ./  # Ensure you're copying yarn.lock if you're using yarn

# Install dependencies
RUN yarn install

# yarn build
RUN yarn build
# Copy the rest of the app's files
COPY . .

# Expose port 3000 (default React development port)
EXPOSE 3000

# Start the React app in development mode
CMD ["yarn", "start"]
