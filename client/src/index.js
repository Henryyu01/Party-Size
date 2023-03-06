import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <HomePage/>
    </Layout>
  </React.StrictMode>
);

