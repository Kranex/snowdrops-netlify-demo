import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import NavBar from "../components/organisms/NavBar";
import FooterBar from "../components/organisms/FooterBar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col w-full min-h-full bg-gray-800">
      <NavBar />
      <Component {...pageProps} />
      <FooterBar />
    </div>
  );
};

export default App;
