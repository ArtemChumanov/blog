import React from "react";
import { wrapper } from "../redux/reducer";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
