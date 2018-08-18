#!/bin/bash

hugo
cd public && git add --all && git commit -m "rebuilding site `date`" && cd ..
git push origin master

