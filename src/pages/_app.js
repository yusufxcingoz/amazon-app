import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain="dev-q962xtov.eu.auth0.com"
      clientId="V7O7Kz3MXggU8PUobBKNvBuxgTiA3M0Y"
      redirectUr={"https://amazon-app-dyk3so6i7-yusufxcingoz.vercel.app/"}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  );
};

export default MyApp;
