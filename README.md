# 🚀 Getting started with Strapi

Create the folder data in the root

### Build image
  docker build -t mystrapi:latest .

## Container

### Local 
  docker-compose up -d postgresDB && yarn develop 
  This will now spin up just a Postgres database and we can run and change files just like working on strapi anywhere.

### Full 
    docker-compose up -d  
    This will run strapi inside a docker container and the database in its own container.