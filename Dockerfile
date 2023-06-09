# Set the base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "start"]
