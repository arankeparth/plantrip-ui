# Use an official Node runtime as a parent image
FROM node:14.16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the app
RUN npm run build --prod

# Set the command to run when the container starts
CMD ["npm", "run", "serve:ssr"]
