# Numericode decipher

### Prerequisites

You need to have Node, [yarn](https://yarnpkg.com/en/docs/install), [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/) installed

### Commands

In root directory type `docker-compose up -d` to run the redis db container in the baclground. Later on to stop the container type `docker ps` and copy the ID and then `docker stop <ID>`
To run the web api go into the api folder and type
```bash
yarn
yarn start
```
Web api now running on port 8080.
To run tests just type in `yarn test`. Make sure the redis docker container is running whilst running the test

To run app go back into the app folder and type
```bash
yarn
yarn start
```
App now running on port 3000
