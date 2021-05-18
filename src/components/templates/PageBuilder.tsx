import { Fragment } from "react";
import { interleave } from "../../../utils/interleave";
import ImageBlock from "../organisms/ImageBlock";
import Gallery from "../organisms/Gallery";
import TextBlock from "../organisms/TextBlock"
import DoubleImage from "../organisms/DoubleImage"
import DoubleColumn from "../organisms/DoubleColumn";
import SingleColumn from "../organisms/SingleColumn";

export type PageComponent = {
  type: 'single_column' | 'double_column' | 'text' | 'image' | 'double_image' | 'gallery',
  title?: string
  text?: string
  image?: string
  left_image?: string
  right_image?: string
  gallery?: string
  caption?: string
  left_caption?: string
  right_caption?: string
  content?: PageComponent[]
  left_column?: PageComponent[]
  right_column?: PageComponent[]
  position?: 'left' | 'right' | 'auto'
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
      case 'double_image':
        return <DoubleImage component={component} />
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