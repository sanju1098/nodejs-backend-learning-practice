# Base image with Node.js version 22
FROM node:22 

# Creates: /app inside container.
WORKDIR /app 

# Copies package files.
COPY package*.json ./

# Installs dependencies.
RUN npm install

# Copies project files.
COPY . .

# Documents application port.
EXPOSE 5000

# Runs application.
CMD ["npm", "start"]