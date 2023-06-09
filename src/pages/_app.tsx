import { type AppType } from "next/dist/shared/lib/utils";
import { PlanetProvider } from "~/context/planetContext";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PlanetProvider>
      <Component {...pageProps} />
    </PlanetProvider>)
};

export default MyApp;
