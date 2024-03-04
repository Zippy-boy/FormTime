# Dockerfile for serving a static website using Nginx
FROM nginx
COPY . /usr/share/nginx/html
