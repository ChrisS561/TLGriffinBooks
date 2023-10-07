import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import '../index.css';
import Navbar from "../Components/Navigation/NavBar"
import Footer from "../Components/Footer/Footer"
import BookDisplay from "../Components/ImageDisplay/BookDisplay"


export default function WomansWorth() {
  
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
		<Navbar/>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
        <BookDisplay
					height={{
						xs: '26rem',
						sm: '30rem',
						md: '32rem',
						lg: '30rem',
						xl: '40rem',
					}}
				/>
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
          {/* <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <AuthorPicture />
          </Box> */}
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
           A WOMAN'S WORTH
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Fermentum odio eu feugiat pretium nibh. Fermentum posuere urna nec tincidunt praesent semper. Dolor purus non enim praesent elementum facilisis leo. Sit amet est placerat in egestas erat imperdiet sed. Est ultricies integer quis auctor elit sed. Vitae aliquet nec ullamcorper sit amet risus nullam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Aenean euismod elementum nisi quis eleifend quam adipiscing. Id cursus metus aliquam eleifend. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Malesuada nunc vel risus commodo viverra.

Malesuada fames ac turpis egestas sed tempus urna. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Pretium quam vulputate dignissim suspendisse in est. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Odio pellentesque diam volutpat commodo sed egestas. Sit amet tellus cras adipiscing enim eu turpis. Dolor sed viverra ipsum nunc. Semper quis lectus nulla at volutpat diam ut. Consectetur a erat nam at lectus urna duis. Et sollicitudin ac orci phasellus egestas tellus. Nisi quis eleifend quam adipiscing vitae proin sagittis. Varius quam quisque id diam vel quam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Risus ultricies tristique nulla aliquet enim. Nullam vehicula ipsum a arcu cursus vitae congue. Quisque sagittis purus sit amet volutpat consequat mauris. Dignissim sodales ut eu sem.
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
            {/* <Button
              variant="contained"
              href="/About"
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
            </Button> */}
          </Box>
        </Box>
      </div>
	  <Footer/>
    </>
  );
}
