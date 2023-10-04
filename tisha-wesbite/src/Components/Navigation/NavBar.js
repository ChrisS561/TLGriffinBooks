import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { common } from '@mui/material/colors';

import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import BooksButton from '../Books/BooksButton';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function HideAppBar(props) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar sx={{ backgroundColor: '#FAF9F8' }}>
					<Container maxWidth="l">
						<Toolbar>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 1,
									display: { xs: 'none', md: 'flex' },
									fontFamily: 'Playfair Display',
									fontWeight: 700,
									letterSpacing: '.3rem',
									color: common.black,
									textDecoration: 'none',
								}}
							>
								T.L. Griffin
							</Typography>
							<Box
								sx={{
									flexGrow: 1,
									display: { xs: 'flex', md: 'none' },
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
									<MenuIcon sx={{ color: 'black' }} />
								</IconButton>

								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									keepMounted
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: 'block', md: 'none' },
										'& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper':
											{ width: '100vw', top: '60px!important' },
									}}
								>
									<MenuItem
										// sx={{ border: "1px solid red", width: "80vw" }}
										onClick={handleCloseNavMenu}
									>
										<Button
											sx={{
												fontFamily: 'inter',
												color: '#4E5865',
												margin: '0 auto',
											}}
											href="/About"
										>
											About
										</Button>
									</MenuItem>
									<MenuItem onClick={handleCloseNavMenu}>
										<Button
											sx={{
												fontFamily: 'inter',
												color: '#4E5865',
												margin: '0 auto',
											}}
											href="/Events"
										>
											Events
										</Button>
									</MenuItem>
									<SubscribeButton />
									<BooksButton />
								</Menu>
							</Box>
							<Typography
								variant="h5"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 2,
									display: { xs: 'flex', md: 'none' },
									flexGrow: 1,
									fontFamily: 'Playfair Display',
									fontWeight: 700,
									letterSpacing: '.1px',
									color: 'common.black',
									textDecoration: 'none',
								}}
							>
								T.L. Griffin
							</Typography>
							<Box
								sx={{
									flexGrow: 1,
									display: {
										xs: 'none',
										md: 'flex',
										justifyContent: 'flex-end',
									},
								}}
							>
								<Button
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: '#4E5865',
										display: 'block',
										fontSize: 15,
										fontFamily: 'inter',
										margin: '1rem',
									}}
									href="/About"
								>
									About
								</Button>
								<BooksButton />
								<Button
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: '#4E5865',
										display: 'block',
										fontSize: 15,
										fontFamily: 'inter',
										margin: '1rem',
									}}
									href="/About"
								>
									Events
								</Button>
								<SubscribeButton />
							</Box>
						</Toolbar>
					</Container>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}
