import {fuchsia} from "tailwindcss/colors";
import"@/app/globals.css";
import { ThemeProvider } from "next-themes";

import NProgress from 'nprogress';



const MyApp = ({ Component, pageProps }) => {

  return (
    <ThemeProvider attribute="class">

      <NProgress color={fuchsia[500]} height={4}/>
      <Component {...pageProps} />
</ThemeProvider>
  );
};

export default MyApp;