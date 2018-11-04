#! /bin/bash
yarn build:server
sudo docker build -t tbach/abb:latest .
sudo docker save tbach/abb:latest | bzip2 | ssh root@68.183.29.91 "bunzip2 | docker load"
ssh root@68.183.29.91 "docker tag tbach/abb:latest dokku/abb:latest && dokku tags:deploy abb latest"