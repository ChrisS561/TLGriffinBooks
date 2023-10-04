import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { common } from '@mui/material/colors';
import BooksButton from '../BooksDisplay/BooksButton';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import MobileNavBar from './MobileNavBar';

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
				<MobileNavBar
					handleOpenNavMenu={handleOpenNavMenu}
					handleCloseNavMenu={handleCloseNavMenu}
					anchorElNav={anchorElNav}
				/>
			</Box>
			<AppBar
				position="static"
				sx={{
					display: { xs: 'none', sm: 'flex' },
					backgroundColor: '#FAF9F8',
				}}
			>
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
		</>
	);
}
export default NavBar;
