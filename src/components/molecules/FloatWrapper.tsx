import { ReactNode } from "react-markdown";
const __tailwind_classes = `
  float-left float-right lg:float-left lg:float-right
  w-1/4 w-1/3 w-1/2 w-2/3 w-3/4 w-full lg:w-1/4 lg:w-1/3 lg:w-1/2 lg:w-2/3 lg:w-3/4 lg:w-full
  aspect-ratio-none aspect-ratio-1/1 aspect-ratio-3/2 aspect-ratio-2/3 aspect-ratio-4/3 aspect-ratio-3/4 aspect-ratio-16/9 aspect-ratio-9/16
`;

export type Position = 'auto' | 'center' | 'left' | 'right';

export interface FloatWrapperProps {
  position: Position
  position_mobile: Position
  width: string
  defaultAlignment?: 'left' | 'right'
  children: ReactNode
}

const getAlignment = (position: Position, defaultAlignment: Position): [Position, string | undefined] => {
    
  const alignment = position === 'auto' ? defaultAlignment : position
  const float = alignment !== 'center' && `float-${alignment}`

  return [alignment, float];
}

const FloatWrapper = ({ position, position_mobile, width, defaultAlignment, children }: FloatWrapperProps) => {
  const [align, float] = getAlignment(position, defaultAlignment);
  const [mAlign, mFloat] = getAlignment(position_mobile, align);
  
  const size =  mAlign === 'center' ? `w-3/4 lg:w-${width}` : `w-${width}`
    
  return (
    <div className={`${size} mx-auto p-4 lg:py-4 ${mFloat} lg:${float}`}>
      { children }
    </div>
  )
}

export default FloatWrapper;