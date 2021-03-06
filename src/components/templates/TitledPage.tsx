import Head from 'next/head'
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
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`Shepton Mallet Snowdrop Festival: ${title}`} />
      </Head>
      <div className="flex-grow w-full" >
        <div className="flex justify-center w-full bg-black pt-5">
          <div className="flex flex-col w-full max-w-screen-2xl items-center" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} >
            <div className="flex flex-col w-full max-w-screen-2xl pt-20 pb-10 px-5">
              <h1 className="md:text-7xl font-normal text-white whitespace-pre-line">{title}</h1>
              <h2 className="md:text-3xl font-medium text-white whitespace-pre-line mt-20">{subtitle}</h2>
              <h2 className="md:text-5xl font-medium text-green-400 mt-40 mb-10">{slogan}</h2>
            </div>
            <h2 className="w-full text-right p-2 font-medium text-white">{background_cc}</h2>
          </div>
        </div>
        <div className="flex flex-col items-center py-10 px-14">
          <div className="flex flex-col w-full max-w-screen-lg">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default TitledPage