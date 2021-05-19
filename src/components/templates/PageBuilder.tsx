import { Fragment } from "react";
import Image, { ImageProps } from "../organisms/blocks/Image";
import Gallery, { GalleryProps } from "../organisms/blocks/Gallery";
import Text, { TextProps } from "../organisms/blocks/Text"
import DoubleColumn, { DoubleColumnProps } from "../organisms/layouts/DoubleColumn";
import SingleColumn, { SingleColumnProps } from "../organisms/layouts/SingleColumn";
import Tiles, { TilesProps } from "../organisms/blocks/Tiles";
import { Position } from "../molecules/FloatWrapper";

export type PageComponent = TextProps | ImageProps | GalleryProps | TilesProps |SingleColumnProps | DoubleColumnProps;

interface Props {
  components: PageComponent[]
}

const PageBuilder = ({components}: Props) => {

  var floatCount = 0;

  const floater = (position: Position): 'left' | 'right' => {
      const alignment = floatCount % 2 ? 'left' : 'right';
      switch (position) {
        case 'left':
          floatCount = 0;
          break;
        case 'right':
          floatCount = 1;
          break;
        default:
          floatCount += 1;
          break;
      }
      return alignment;
  }

  const page = components.map((component) => {
    switch(component.type) {
      case 'single_column':
        return <SingleColumn {...component} />
      case 'double_column':
        return <DoubleColumn {...component} />
      case 'text':
        return <Text {...component} />
      case 'gallery':
        return <Gallery {...component} />
      case 'image':
        return <Image defaultAlignment={floater(component.position)} {...component} />
      case 'tiles':
        return <Tiles defaultAlignment={floater(component.position)} {...component} />
    }
  })

  return (
    <>
      { page.map((item, idx) => (<Fragment key={idx}>{item}</Fragment>)) }
    </>
  )
}

export default PageBuilder