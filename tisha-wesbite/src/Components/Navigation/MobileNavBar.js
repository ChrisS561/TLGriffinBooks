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
import BooksButton from '../BooksDisplay/BooksButton';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';

function MobileNavBar(props) {
	const { handleOpenNavMenu, handleCloseNavMenu, anchorElNav } = props;
	return (
		<AppBar position="static" sx={{ backgroundColor: '#FAF9F8' }}>
			<Container maxWidth="l">
				<Toolbar>
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
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default MobileNavBar;
