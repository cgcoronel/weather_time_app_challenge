#
# Dockerfile
#
# Created on 16 de Febrero de 2020
# Copyright © 2020
#
# Author Cristian Coronel
# 

FROM nginx

RUN mkdir /public/

COPY ["default.conf", "/etc/nginx/conf.d"]

COPY ["public", "/public"]

EXPOSE 80