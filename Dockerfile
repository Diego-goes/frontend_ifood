# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Cria o certificado SSL
RUN npm install -g mkcert
WORKDIR /app/certs
RUN mkcert create-ca
RUN mkcert create-cert
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the application will run (adjust as needed)
EXPOSE 8080

# Define the command to start the application
CMD ["npm", "run", "serve"]
