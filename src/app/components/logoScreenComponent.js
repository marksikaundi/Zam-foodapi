import Image from "next/image";
import React from "react";
import logo from "@/src/app/assets/mms_logo.svg";
import AppBar from "@mui/material/AppBar";
import "@/src/app/styles/globals.css";
const LogoComponent = () => {
  return (
    <div id="logo">
      <Image src={logo} alt="logo" />
      <div id="logo-heading">Mentor Management System</div>
    </div>
  );
};

export default LogoComponent;
