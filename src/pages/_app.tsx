import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import NavBar from "../components/organisms/NavBar";
import FooterBar from "../components/organisms/FooterBar";
import MobileMenu from "../components/organisms/MobileMenu";

const App = ({ Component, pageProps }: AppProps) => {
  const classes = "relative flex-col w-full min-h-full bg-gray-800";
  return (
    <>
      <div className={`hidden md:flex ${classes}`}>
        <NavBar />
        <Component {...pageProps} />
        <FooterBar />
      </div>
      <div className={`md:hidden flex ${classes}`}>
        <MobileMenu>
          <Component {...pageProps} />
          <FooterBar />
        </MobileMenu>
      </div>
    </>
  );
};

export default App;
