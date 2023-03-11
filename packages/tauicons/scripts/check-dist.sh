#!/bin/bash

NC='\e[0m'
RED='\e[30;41m CHECK-DIST.SH \e[0m\e[31m'
GREEN='\e[30;42m CHECK-DIST.SH \e[0m\e[32m'

if [ "$(basename "$(pwd)")" != "dist" ]; then
  echo -e "${RED} Error: current directory is not named 'dist'${NC}"
  exit 1
fi

required_files=(LICENSE README.md package.json .npmignore index.d.ts index.js index.mjs)

for f in "${required_files[@]}"; do
  if [ ! -f "$f" ]; then
    echo -e "${RED} Error: '$f' file not found in 'dist' directory${NC}"
    exit 1
  fi
done

echo -e "${GREEN} Success: 'dist' directory contains all required files${NC}"
exit 0
