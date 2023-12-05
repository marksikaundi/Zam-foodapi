"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoComponent from "@/src/app/components/logoScreenComponent";
import "@/src/app/styles/welcome.css";

import {
  Button,
  FormControl,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleDoneClick = () => {
    router.push("/");
  };

  return (
    <div className="login-screen">
      <div className="logo-mms">
        <LogoComponent />
      </div>

      <div className="login-screen-right">
        <div id="logo-heading" style={{ color: "black" }}>
          Forgot Password ?
        </div>
        <h4 style={{ marginTop: "0px" }}>
          Please enter your registered email to reset your password
        </h4>
        <TextField
          style={{
            marginBottom: "1rem",
            width: "90%",
            height: "50px",
            borderRadius: "5px",
          }}
          id="email-field"
          label="Email"
          variant="outlined"
        />

        <Button
          style={{
            marginBottom: "1rem",
            width: "90%",
            height: "50px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: 600,
          }}
          variant="contained"
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
