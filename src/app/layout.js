import React from "react";
import Home from "./page";

const Layout = ({ children }) => {
  return (
    <html>
      <body>
        <Home>{children}</Home>
      </body>
    </html>
  );
};
export default Layout;
