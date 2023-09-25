import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      sx={{
        my: 2,
        display: "block",
        fontSize: 15,
        fontFamily: "inter",
        margin: "1rem",
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
