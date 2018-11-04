#! /bin/bash
yarn build:server

sudo heroku container:push --app=stormy-journey-43690 web
sudo heroku container:release --app=stormy-journey-43690 web
