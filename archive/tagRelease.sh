#!/bin/bash
currentVersion="v"$(node -p "require('./package.json').version")

git tag $currentVersion
git push --tags