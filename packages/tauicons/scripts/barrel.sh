#!/bin/bash

NC='\e[0m'
RED='\e[30;41m BARREL.SH \e[0m\e[31m'
GREEN='\e[30;42m BARREL.SH \e[0m\e[32m'
YELLOW='\e[30;43m BARREL.SH \e[0m\e[33m'

srcPath="./src"
iconsPath="${srcPath}/icons"

if [ ! -d "${srcPath}" ]; then
  echo -e "${RED} The source path ${srcPath} doesn't exist.${NC}"
  exit 1
elif [ ! -d "${iconsPath}" ]; then
  echo -e "${RED} The icons path ${iconsPath} doesn't exist.${NC}"
  exit 1
elif [ ! -f "${srcPath}/index.ts" ]; then
  echo -e "${RED} The source index file ${srcPath}/index.ts doesn't exist.${NC}"
  exit 1
fi

echo -e "${YELLOW} Adding barrel exports to ${srcPath}/index.ts${NC}"

echo 'import { type FC, type SVGAttributes } from "react";

export interface IconProps extends SVGAttributes<SVGElement> {
  size?: string | number;
}

export type Icon = FC<IconProps>;

export const DefaultIconProps: Partial<IconProps> = {
  size: 24,
  fill: "none",
  strokeWidth: 1.5,
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  shapeRendering: "geometricPrecision",
};
' > "${srcPath}/index.ts"

for file in "${iconsPath}"/*.tsx
do
  filename=$(basename -- "$file")
  name="$(echo "${filename%.*}" | sed -r 's/(-[a-z])|\b([a-z])/\U\1\U\2/g' | sed 's/-//g')"
  echo "export { default as $name } from \"./icons/${filename%.*}\";" >> "${srcPath}/index.ts"
done

echo -e "${GREEN} Barrel exports added.${NC}"
