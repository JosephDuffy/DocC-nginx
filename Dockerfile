FROM nginx:alpine

# COPY docc-nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY VaporDocC.doccarchive /docs
