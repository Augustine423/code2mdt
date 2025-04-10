# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY .env ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx and run json-server
FROM nginx:alpine
WORKDIR /app

# Install Node.js for json-server
RUN apk add --update nodejs npm

# Copy the built React app
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the assets folder to a public directory
COPY --from=build /app/src/assets /usr/share/nginx/html/assets

# Copy json-server data and install json-server
COPY --from=build /app/src/json-server/db.json /app/

RUN npm install -g json-server

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports for Nginx (frontend) and json-server (backend)
EXPOSE 80 3003

# Start both Nginx and json-server
CMD ["sh", "-c", "nginx -g 'daemon off;' & json-server --watch /app/db.json --port 3003"]
