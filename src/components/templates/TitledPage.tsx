import { ReactNode } from "react"

interface Props {
  title: string
  subtitle?: string
  slogan?: string
  background: string
  background_cc: string
  children: ReactNode
}

const TitledPage = ({title, subtitle, slogan, background, background_cc, children}: Props) => {
  
  return (
    <div className="flex-grow w-full" >
      <div className="flex justify-center w-full bg-black pt-5">
        <div className="flex flex-col w-full max-w-screen-2xl items-center" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} >
          <div className="flex flex-col w-full max-w-screen-2xl pt-20 pb-10 px-5">
            <h1 className="md:text-7xl font-normal text-white whitespace-pre">{title}</h1>
            <h2 className="md:text-3xl font-medium text-white whitespace-pre mt-20">{subtitle}</h2>
            <h2 className="md:text-5xl font-medium text-green-400 mt-40 mb-10">{slogan}</h2>
          </div>
          <h2 className="w-full text-right p-2 font-medium text-white">{background_cc}</h2>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="gap-10 max-w-screen-xl py-10 px-14">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TitledPage