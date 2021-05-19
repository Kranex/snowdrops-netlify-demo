import { Fragment } from "react";
import Image, { ImageProps } from "../organisms/blocks/Image";
import Gallery, { GalleryProps } from "../organisms/blocks/Gallery";
import Text, { TextProps } from "../organisms/blocks/Text"
import DoubleColumn, { DoubleColumnProps } from "../organisms/layouts/DoubleColumn";
import SingleColumn, { SingleColumnProps } from "../organisms/layouts/SingleColumn";


export type PageComponent = TextProps | ImageProps | GalleryProps | SingleColumnProps | DoubleColumnProps;

interface Props {
  components: PageComponent[]
}

const PageBuilder = ({components}: Props) => {

  var floatCount = 0;

  const page = components.map((component) => {
    switch(component.type) {
      case 'single_column':
        return <SingleColumn {...component} />
      case 'double_column':
        return <DoubleColumn {...component} />
      case 'text':
        return <Text {...component} />
      case 'image':
        const pos = floatCount % 2 ? 'left' : 'right';
        switch (component.position) {
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
        return <Image defaultAlignment={pos} {...component} />
      case 'gallery':
        return <Gallery {...component} />
    }
  })

  return (
    <>
      { page.map((item, idx) => (<Fragment key={idx}>{item}</Fragment>)) }
    </>
  )
}

export default PageBuilder