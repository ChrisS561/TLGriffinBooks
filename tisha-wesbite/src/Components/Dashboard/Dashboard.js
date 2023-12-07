import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import Newsletter from './Newsletter';
import Subscribers from './Subscribers';
import Home from './Home';
import ImageUrl from './ImageURL'; // Assuming you have the ImageURL component
import { AppBar, Drawer } from '../../Style/Styling';
import { Link } from 'react-router-dom';

// Main Dashboard Component
export default function Dashboard() {
	const [open, setOpen] = React.useState(true);
	const [showNewsletter, setShowNewsletter] = React.useState(false);
	const [showSubscribers, setSubscribers] = React.useState(false);
	const [showSubscriberData, setShowSubscriberData] = React.useState(false);
	const [showImageURLData, setShowImageURLData] = React.useState(false);
	const [showHome, setShowHome] = React.useState(true);
	const [showImagesURL, setShowImagesURL] = React.useState(false);
	const [user, setUser] = React.useState(null);
	const defaultTheme = createTheme();
	const auth = getAuth();
	const navigate = useNavigate();

	// Toggle Drawer
	const toggleDrawer = () => {
		setOpen(!open);
	};

	// Handle Create Newsletter Click
	const handleCreateNewsletterClick = () => {
		setShowNewsletter(true);
		setSubscribers(false);
		setShowSubscriberData(false);
		setShowHome(false);
		setShowImagesURL(false);
	};

	const handleShowSubscribers = () => {
		setSubscribers(true);
		setShowNewsletter(false);
		setShowSubscriberData(true);
		setShowHome(false);
		setShowImagesURL(false);
	};

	const handleSubscriberShowData = () => {
		setSubscribers(false);
		setShowNewsletter(false);
		setShowSubscriberData(true);
		setShowHome(false);
		setShowImagesURL(false);
	};

	const handleSubscriberCloseData = () => {
		setSubscribers(false);
		setShowNewsletter(false);
		setShowSubscriberData(true);
		setShowHome(false);
		setShowImagesURL(false);
	};

	const handleShowHome = () => {
		setSubscribers(false);
		setShowNewsletter(false);
		setShowSubscriberData(false);
		setShowImagesURL(false);
		setShowHome(true);
	};

	const handleShowImagesURL = () => {
		setSubscribers(false);
		setShowNewsletter(false);
		setShowSubscriberData(false);
		setShowHome(false);
		setShowImagesURL(true);
		setShowImageURLData(false);
	};

	const handleImageUrlShowData = () => {
		setSubscribers(false);
		setShowNewsletter(false);
		setShowSubscriberData(false);
		setShowHome(false);
		setShowImagesURL(true);
		setShowImageURLData(true);
	};

	const handleImageUrlCloseData = () => {
		setShowImagesURL(false);
		setShowImageURLData(false);
		setShowImagesURL(true)
	};

	// Handle Signout
	const handleSignout = () => {
		signOut(auth)
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				console.error('There was an error: ', error.message);
			});
	};

	// Effect for checking authentication state
	React.useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
				navigate('/');
			}
		});

		return () => {
			// Unsubscribe from the listener when the component is unmounted
			unsubscribe();
		};
	}, [auth, navigate]);

	// If the user is not authenticated, render nothing
	if (!user) {
		return null;
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="absolute" open={open}>
					<Toolbar sx={{ pr: '24px' }}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer}
							sx={{
								marginRight: '36px',
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							sx={{ flexGrow: 1 }}
						>
							Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<Toolbar
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-end',
							px: [1],
						}}
					>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					<List component="nav">
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								color: 'Black',
							}}
						>
							<Link
								color="inherit"
								style={{ textDecoration: 'none' }}
								onClick={handleShowHome}
							>
								<Typography variant="subtitle2">Home</Typography>
							</Link>
						</ListItemButton>
						<Divider sx={{ my: 1 }} />
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								color: 'Black',
							}}
						>
							<Link
								color="inherit"
								style={{ textDecoration: 'none' }}
								onClick={handleCreateNewsletterClick}
							>
								<Typography variant="subtitle2">Create Newsletter</Typography>
							</Link>
						</ListItemButton>
						<Divider sx={{ my: 1 }} />
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								color: 'Black',
							}}
						>
							<Link
								color="inherit"
								style={{ textDecoration: 'none' }}
								onClick={handleShowImagesURL}
							>
								<Typography variant="subtitle2">Images URL's</Typography>
							</Link>
						</ListItemButton>
						<Divider sx={{ my: 1 }} />
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								color: 'Black',
							}}
						>
							<Link
								color="inherit"
								style={{ textDecoration: 'none' }}
								onClick={handleSubscriberShowData}
							>
								<Typography variant="subtitle2">Subscribers</Typography>
							</Link>
						</ListItemButton>
						<Divider sx={{ my: 1 }} />
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								color: 'Black',
							}}
						>
							<Link
								color="inherit"
								style={{ textDecoration: 'none' }}
								onClick={handleSignout}
							>
								<Typography variant="subtitle2">Signout</Typography>
							</Link>
						</ListItemButton>
					</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light'
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					{showHome && <Home />}
					{showNewsletter && <Newsletter />}
					{showSubscriberData ? (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<Button onClick={handleShowSubscribers}>Show Data</Button>
							<Button onClick={handleSubscriberCloseData}>Close Data</Button>
							<Typography
								sx={{
									color: 'red',
									fontStyle: 'italic',
									textAlign: 'center',
								}}
							>
								Caution: Retrieving document data incurs database reads.
								Exercise caution when accessing documents frequently to optimize
								performance and minimize resource usage.
							</Typography>
						</Box>
					) : null}
					{showSubscribers && <Subscribers />}
					{showImagesURL && (
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<Button onClick={handleImageUrlShowData}>
								Show Image URL Data
							</Button>
							<Button onClick={handleImageUrlCloseData}>
								Close Image URL Data
							</Button>
							<Typography
								sx={{
									color: 'red',
									fontStyle: 'italic',
									textAlign: 'center',
								}}
							>
								Caution: Each data retrieval operation may lead to additional
								database reads, potentially affecting performance. Exercise
								prudence when fetching data to optimize resource usage and
								enhance application responsiveness.
							</Typography>
							{showImageURLData && <ImageUrl />}
						</Box>
					)}
				</Box>
			</Box>
		</ThemeProvider>
	);
}
