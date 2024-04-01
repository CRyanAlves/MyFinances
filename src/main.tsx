import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import Tools from "./pages/Tools.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/invest" element={<Tools />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
