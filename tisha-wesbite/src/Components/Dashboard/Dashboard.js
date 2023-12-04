import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
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

const drawerWidth = 240;

// Styled Components
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const defaultTheme = createTheme();
//TODO ADD a message to make sure signout 
// Main Dashboard Component
export default function Dashboard() {
	const [open, setOpen] = React.useState(true);
	const [showNewsletter, setShowNewsletter] = React.useState(false);
	const [user, setUser] = React.useState(null);
	const auth = getAuth();
	const navigate = useNavigate();

	// Toggle Drawer
	const toggleDrawer = () => {
		setOpen(!open);
	};

	// Handle Create Newsletter Click
	const handleCreateNewsletterClick = () => {
		setShowNewsletter(true);
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
					<Toolbar
						sx={{
							pr: '24px',
						}}
					>
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
					{/* TODO Fix the buttons so that the whole button is able to be clicked */}
					<List component="nav">
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								// backgroundColor: '#4CAF50',
								color: 'Black',
								'&:hover': {
									backgroundColor: '#4CAF50',
									color: 'white',
								},
							}}
						>
							<Button
								color="inherit"
								sx={{ textDecoration: 'none' }}
								onClick={handleCreateNewsletterClick}
							>
								<Typography variant="subtitle2">Create Newsletter</Typography>
							</Button>
						</ListItemButton>
						<Divider sx={{ my: 1 }} />
						<ListItemButton
							sx={{
								padding: '5px',
								borderRadius: '8px',
								color: 'Black',
								'&:hover': {
									backgroundColor: '#4CAF50',
									color: 'white',
								},
							}}
						>
							<Button
								color="inherit"
								sx={{ textDecoration: 'none' }}
								onClick={handleSignout}
							>
								<Typography variant="subtitle2">Signout</Typography>
							</Button>
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
					{showNewsletter && <Newsletter />}
				</Box>
			</Box>
		</ThemeProvider>
	);
}
