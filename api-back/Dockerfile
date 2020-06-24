FROM node:8

RUN mkdir -p /opt/app/log

WORKDIR /opt/app/

COPY ["package.json", "package-lock.json", "/opt/app/"]

RUN npm install --production

COPY ["src", "/opt/app/src"]

COPY ["prod.json", "/opt/app/"]

COPY [".env", "/opt/app/"]

# Instala PM2
RUN npm install pm2 -g 

# Instala el modulo de rotacion de logs
RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:max_size 10M
RUN pm2 set pm2-logrotate:compress true
RUN pm2 set pm2-logrotate:retain 30

CMD ["pm2-runtime", "start", "prod.json"]
