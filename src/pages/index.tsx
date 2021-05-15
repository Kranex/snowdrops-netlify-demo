import { attributes, react as HomeContent } from '../../content/home.md'

const Index = () => {
  let { title, subtitle, slogan, background, background_cc } = attributes;
  return (
    <div className="w-full bg-black" >
      <div className="w-full" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} >
        <div className="flex flex-col p-20">
          <h1 className="text-7xl font-normal text-white whitespace-pre">{title}</h1>
          <h2 className="text-3xl font-medium text-white whitespace-pre mt-20">{subtitle}</h2>
          <h2 className="font-medium text-white mt-40 text-right">{background_cc}</h2>
          <h2 className="text-5xl font-medium text-green-400 mt-5 mb-10">{slogan}</h2>
        </div>
      </div>
      <div className="bg-gray-800 py-10 px-14 text-xl text-white text-justify whitespace-pre-line">
        <HomeContent />
      </div>
    </div>
  );
}



export default Index;