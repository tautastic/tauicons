#!/bin/bash

NC='\e[0m'
RED='\e[30;41m POST-BUILD.SH \e[0m\e[31m'
GREEN='\e[30;42m POST-BUILD.SH \e[0m\e[32m'
YELLOW='\e[30;43m POST-BUILD.SH \e[0m\e[33m'

rootPath="./"
outputPath="./dist"

if [ ! -d "${outputPath}" ]; then
  echo -e "${RED} The output path ${outputPath} doesn't exist.${NC}"
  exit 1
fi

echo -e "${YELLOW} Moving files to output path ${outputPath}${NC}"

shouldMovedFiles=("LICENSE" "README.md" "package.json" "scripts" ".npmignore")

for file in "${shouldMovedFiles[@]}"
do
  filePath="${rootPath}/${file}"
  outputFilePath="${outputPath}/${file}"
  cp -rT "${filePath}" "${outputFilePath}"
done


echo -e "${GREEN} Files moved.${NC}"
