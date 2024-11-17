# Use Node.js to build the app
FROM node:16-alpine AS build

WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files
COPY . ./

# Build the Vite app
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:1.21-alpine

# Copy the Vite build output (dist) to Nginx HTML directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy the default Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
