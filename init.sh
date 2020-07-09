# Iniciamos la base de datos Redis
npm install --prefix api-back
npm install --prefix front
npm run build --prefix front
docker-compose build && docker-compose up -d
