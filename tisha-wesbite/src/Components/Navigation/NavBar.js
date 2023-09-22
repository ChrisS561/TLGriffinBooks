import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { common } from "@mui/material/colors";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Buttons/LoginButton";
import LogoutButton from "../Buttons/LogoutButton";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const pages = ["About", "Events", "Subscribe"];
// const Books = ['Book 1', 'Book 2', 'Book 3'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Auth0 functionality
  const { user, isLoading } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  // 	setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  // 	setAnchorElUser(null);
  // };

  return (

    <AppBar position="static" sx={{ backgroundColor: "#FAF9F8" }}>
      <Container maxWidth="l">
        <Toolbar>
          {/* Bigger Screens */}
          {/* Mobile devices */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "none", md: "flex" },
              fontFamily: "Playfair Display",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: common.black,
              textDecoration: "none",
            }}
          >
            T.L. Griffin
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ fontFamily: "inter" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Playfair Display",
              fontWeight: 700,
              letterSpacing: ".1px",
              color: "common.black",
              textDecoration: "none",
            }}
          >
            T.L. Griffin
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: 15,
                  fontFamily: "inter",
                  margin: "1rem",
                }}
                href={`/${page}`}
              >
                {page}
              </Button>
            ))}
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button
                    variant="outlined"
                    {...bindTrigger(popupState)}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      fontSize: 15,
                      fontFamily: "inter",
                      margin: "1rem",
                      border: "none",
                    }}
                  >
                    Books
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Book Test</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            {!isLoading && !user && <LoginButton />}
            {!isLoading && user && <LogoutButton />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
