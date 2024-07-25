import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header.tsx";
import CreateTrail from "./create-trail/index.tsx";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trail",
    element: <CreateTrail />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#00bf63",
    },
    secondary: {
      main: "#00bf63",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Header />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
