# Stage 1: Build the React app
FROM node:18-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:1.21.6-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build-stage /app/build /usr/share/nginx/html

RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080

# Tell Docker about the executable to run (nginx in the foreground)
CMD ["nginx", "-g", "daemon off;"]