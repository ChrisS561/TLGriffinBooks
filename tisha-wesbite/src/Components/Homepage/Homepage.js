import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import '../../index.css';
import AuthorPicture from '../../Components/ImageDisplay/AuthorPicture';

export default function Homepage() {
  //Standard is 1440
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="homepage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100vh",
          paddingTop: "6rem",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <AuthorPicture />
        </Box>
        <Box
          sx={{
            display: "block",
            width: "100vw",
            marginRight: { xs: 1, sm: 11, md: 15, lg: 24 },
            marginTop: { sm: 5, lg: 0 },
            marginBottom: { md: 15, lg: 9 },
          }}
        >
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <AuthorPicture />
          </Box>
          <Typography
            variant="h3"
            sx={{
              display: "block",
              color: "#4E5865",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginLeft: { xs: 2, sm: 0 },
              textAlign: "left",
              letterSpacing: "5px",
              fontFamily: "inter",
              fontSize: { xs: 36, sm: 48, lg: 60 },
            }}
            gutterBottom
          >
            AUTHOR
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: "block",
              textAlign: "left",
              marginLeft: { xs: 2, sm: 0 },
              alignSelf: "center",
              width: { xs: "100%", sm: "100%", xl: "80%" },
              marginBottom: 3,
              fontFamily: "inter",
              fontSize: { xs: 14, lg: 16 },
              color: "#677884",
            }}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Box
            // class="animate__animated animate__headShake animate__delay-5s 5s"
            sx={{
              display: "block",
              width: { xs: "10rem", sm: "15rem", md: "11rem" },
              fontFamily: "inter",
              alignItems: "center",
              marginLeft: { xs: 2, sm: 0 },
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              href="About"
              color="info"
              sx={{
                transition:
                  "box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease",
                ":hover": {
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                  animation: "shake 0.5s",
                },
                display: "block",
                width: "100%",
                maxWidth: "100%",
                fontFamily: "inter",
                fontSize: "15px",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
}
