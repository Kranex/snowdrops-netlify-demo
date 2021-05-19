#!/usr/bin/env bash

ASSETS=public/assets
GALLERIES=$ASSETS/galleries
MANIFEST=$ASSETS/galleries/manifest.yml

mkdir -p $GALLERIES

echo > $MANIFEST
for ZIP in $ASSETS/*.zip; do
  GALLERY="$(basename -- $ZIP)"
  
  # Extract the gallery
  unzip -u $ASSETS/$GALLERY -d $GALLERIES/${GALLERY%\.zip}

  # Generate the manifest
  echo "  ${GALLERY%\.zip}:" >> $MANIFEST
  for IMG in $GALLERIES/${GALLERY%\.zip}/*; do
    ITEM="$(basename -- $IMG)"
    echo "    - ${ITEM}" >> $MANIFEST
  done
done

for IMG in $(find $ASSETS -not -path $ASSETS/small/\* | grep 'jpeg\|jpg\|png\|gif\|tiff\|tif$' | sed 's,'"$ASSETS/"',,' ); do
  mkdir -p "$ASSETS/small/$(echo $IMG | sed 's/[^\/]*$//g')"
  convert $ASSETS/$IMG -resize 400x400\> $ASSETS/small/$IMG
done