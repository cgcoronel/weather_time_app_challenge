FROM nginx

RUN mkdir /public/

COPY ["default.conf", "/etc/nginx/conf.d"]

COPY ["public", "/public"]

EXPOSE 80