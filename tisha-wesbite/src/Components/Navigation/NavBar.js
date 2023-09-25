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
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import BooksButton from '../BooksDisplay/BooksButton';
import SubscribeButton from '../SubmitButtonDisplay/SubscribeButton';

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	// Auth0 functionality
	const { user, isLoading } = useAuth0();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" sx={{ backgroundColor: '#FAF9F8' }}>
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
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
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
						{!isLoading && !user && <LoginButton />}
						{!isLoading && user && <LogoutButton />}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
