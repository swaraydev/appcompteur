FROM openjdk:17-slim

# Mets à jour les paquets et installe Maven
RUN apt-get update && apt-get install -y maven

# Nettoie le cache du gestionnaire de paquets
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Crée un répertoire pour l'application
WORKDIR /app


# Expose le port sur lequel ng serve va écouter
EXPOSE 8080

CMD ["mvn", "spring-boot:run"]
