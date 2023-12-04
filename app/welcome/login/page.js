"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoComponent from "../logoScreenComponent";
import "../../welcome/welcome.css";
import google_logo from "@/app/assets/google_logo.svg";

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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const svgIcon = (
    <Icon>
      <Image
        alt="google logo"
        src={google_logo}
        style={{ width: "100%", height: "100%" }}
      />
    </Icon>
  );
  return (
    <div className="login-screen">
      <div className="logo-mms">
        <LogoComponent />
      </div>

      <div className="login-screen-right">
        <div id="logo-heading" style={{ color: "black" }}>
          Welcome!
        </div>
        <h4 style={{ marginTop: "0px" }}>Login to continue </h4>
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
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
            style={{
              marginBottom: "1rem",
              width: "90%",
              height: "50px",
              borderRadius: "5px",
            }}
            id="password-field"
            label="Password"
          />
        </FormControl>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="button"
            style={{
              marginBottom: "1rem",
              marginRight: "3rem",
              height: "50px",
              textAlign: "center",
              alignItems: "right",
            }}
            onClick={() => router.push("/forgetPassword")}
          >
            Forget password?
          </Button>
        </div>
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
          Login
        </Button>
        <Button
          style={{
            width: "90%",
            height: "50px",
            borderRadius: "10px",
            fontWeight: "600",
          }}
          variant="outlined"
          startIcon={svgIcon}
        >
          Sign in with google
        </Button>
      </div>
    </div>
  );
};

export default Login;
