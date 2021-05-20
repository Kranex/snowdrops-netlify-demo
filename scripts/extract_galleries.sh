#!/usr/bin/env bash

ASSETS=public/assets
SMALL=$ASSETS/small
GALLERIES=$ASSETS/galleries
MANIFEST=$ASSETS/galleries/manifest.yml

rm -rf $GALLERIES
rm -rf $SMALL
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
    if file "$IMG" | grep -qE "image|bitmap"; then
      echo "    - ${ITEM}" >> $MANIFEST
    fi
  done
done

for IMG in $(find $ASSETS -not -path $SMALL/\* | grep 'jpeg\|jpg\|png\|gif\|tiff\|tif$' | sed 's,'"$ASSETS/"',,' ); do
  mkdir -p "$SMALL/$(echo $IMG | sed 's/[^\/]*$//g')"
  convert $ASSETS/$IMG -resize 400x400\> $SMALL/$IMG
done