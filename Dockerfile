# Use an official Node.js runtime as the base image
FROM node:slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port your Next.js app will run on (usually 3000)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]