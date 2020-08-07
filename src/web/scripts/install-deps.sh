#!/bin/bash

cd /root/web/


echo "Installing dependencies in package.json"
npm install

echo "Running npm audit fix"
npm audit fix

echo "Npm DONE"