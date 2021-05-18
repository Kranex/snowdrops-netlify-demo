import { Fragment } from "react";
import ImageBlock from "../organisms/blocks/Image";
import Gallery from "../organisms/blocks/Gallery";
import TextBlock from "../organisms/blocks/Text"
import DoubleColumn from "../organisms/DoubleColumn";
import SingleColumn from "../organisms/SingleColumn";

export type PageComponent = {
  type: 'single_column' | 'double_column' | 'text' | 'image' | 'gallery',
  title?: string
  text?: string
  image?: string
  left_image?: string
  right_image?: string
  gallery?: string
  caption?: string
  width?: string
  aspect?: string
  left_caption?: string
  right_caption?: string
  content?: PageComponent[]
  left_column?: PageComponent[]
  right_column?: PageComponent[]
  position?: 'left' | 'right' | 'center' | 'auto'
  position_mobile?: 'left' | 'right' |  'center' | 'auto'
}

interface Props {
  components: PageComponent[]
}

const PageBuilder = ({components}: Props) => {

  var floatCount = 0;

  const page = components.map((component, idx) => {
    switch(component.type) {
      case 'single_column':
        return <SingleColumn component={component} />
      case 'double_column':
        return <DoubleColumn component={component} />
      case 'text':
        return <TextBlock component={component} />
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
        return <ImageBlock component={component} defaultAlignment={pos} />
      case 'gallery':
        return <Gallery component={component} />
    }
  })



  return (
    <>
      { page.map((item, idx) => (<Fragment key={idx}>{item}</Fragment>)) }
    </>
  )
}

export default PageBuilder