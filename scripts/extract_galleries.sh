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
