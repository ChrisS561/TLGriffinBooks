import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      sx={{
        display: 'inherit',
				fontFamily: 'inter',
				color: '#4E5865',
				margin: '1rem',
      }}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
