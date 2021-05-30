import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain="dev-q962xtov.eu.auth0.com"
      clientId="V7O7Kz3MXggU8PUobBKNvBuxgTiA3M0Y"
      redirectUr={"http://localhost:3000/"}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  );
};

export default MyApp;
