# Utilise une version spécifique de Node.js qui correspond à celle utilisée localement
FROM node:14.21.3

# Crée un répertoire pour l'application
WORKDIR /app

# Installe Angular CLI à la version spécifique
RUN npm install -g @angular/cli@13.3.11

# Expose le port sur lequel ng serve va écouter
EXPOSE 4200

CMD npm i && npm run docker
