import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUr={"https://amazon-app-dyk3so6i7-yusufxcingoz.vercel.app/"}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  );
};

export default MyApp;
