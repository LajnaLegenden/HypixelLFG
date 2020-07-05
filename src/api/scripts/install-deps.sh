#!/bin/bash

cd /root/api/


echo "Installing dependencies in package.json"
npm install

echo "Installing nodemon and pm2"
npm install -g pm2 nodemon