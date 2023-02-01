import React from "react";
import { Navbar } from "../../components";
import "../styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className="px-16">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
