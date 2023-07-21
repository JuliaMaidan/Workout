import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import { Auth0Provider } from "@auth0/auth0-react";
import "./sass/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// import React from "react";
// import ReactDOM from "react-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
// import App from "./components/App";

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-yuliia.eu.auth0.com"
//     clientId="Jwul5YnXX4BE0FHYmtWL9V5UNtRufnGe"
//     authorizationParams={{
//       redirect_uri: "http://localhost:3000/profile",
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import App from "./components/App";
// import store from "./redux/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter basename="/slimmome-react-app">
//           <App />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
