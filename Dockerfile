FROM nginx:latest

LABEL authors="Kenley"

# Copy the dist directory to the nginx directory
COPY ./dist /var/www/html
# Use default.conf to override the default configuration
COPY ./docker/conf.d/*.conf /etc/nginx/conf.d/
EXPOSE 80
