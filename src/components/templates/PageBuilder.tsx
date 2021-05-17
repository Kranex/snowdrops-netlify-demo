import { Fragment } from "react";
import { interleave } from "../../../utils/interleave";
import FloatingImage from "../organisms/FloatingImage";
import Gallery from "../organisms/Gallery";
import TextBlock from "../organisms/TextBlock"
import DoubleImage from "../organisms/DoubleImage"

export type PageComponent = {
  type: 'text_block' | 'image' | 'double_image' | 'floating_image' | 'gallery',
  title?: string
  text?: string
  image?: string
  left_image?: string
  right_image?: string
  gallery?: string
  caption?: string
  left_caption?: string
  right_caption?: string
  position?: 'left' | 'right' | 'auto'
}

interface Props {
  components: PageComponent[]
}

const PageBuilder = ({components}: Props) => {

  var floatCount = 0;

  const page = components.map((component, idx) => {
    switch(component.type) {
      case 'text_block':
        return <TextBlock component={component} />
      case 'double_image':
        return <DoubleImage component={component} />
      case 'floating_image':
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

        return <FloatingImage component={component} defaultAlignment={pos} />
      case 'gallery':
        return <Gallery component={component} />
    }
  })



  return (
    <div className="flex flex-col max-w-screen-lg">
      { interleave(page, <div className="h-10"/>).map((item, idx) => (<Fragment key={idx}>{item}</Fragment>)) }
    </ div>
  )
}

export default PageBuilder