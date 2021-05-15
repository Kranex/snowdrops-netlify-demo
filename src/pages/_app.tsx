import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import HeaderBar from "../components/organisms/HeaderBar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <HeaderBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
