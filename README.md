# 🚀 Getting started with Strapi

Create the folder data in the root

## Build image
  docker build -t mystrapi:latest .

## Container

### Local 
  docker-compose up -d postgresDB && yarn develop 
  This will now spin up just a Postgres database and we can run and change files just like working on strapi anywhere.

### Full 
    docker-compose up -d  
    This will run strapi inside a docker container and the database in its own container.

### Rebuild container after changes in image
  docker-compose up -d --build

### Push code to github

### Log in to digital ocean
  1. Under access, launch droplet console and
  2. cd into project directory
  3. run git pull
  4. docker-compose up -d --build
  5. Get the public ip address of digital ocean virtual machine
  6. in browser: public_ip/1337/admin