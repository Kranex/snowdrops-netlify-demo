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

var __AlignLeft = true;

const PageBuilder = ({components}: Props) => {

  const getDefaultAlignment = (position: Position): 'left' | 'right' => {
      __AlignLeft = position === 'left' ? true : (position === 'right' ? false : !__AlignLeft) 
      return __AlignLeft ? 'left' : 'right';
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
        return <Image defaultAlignment={getDefaultAlignment(component.position)} {...component} />
      case 'tiles':
        return <Tiles defaultAlignment={getDefaultAlignment(component.position)} {...component} />
    }
  })

  return (
    <>
      { page.map((item, idx) => (<Fragment key={idx}>{item}</Fragment>)) }
    </>
  )
}

export default PageBuilder