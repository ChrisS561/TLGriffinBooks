import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Divider, Stack, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import BooksButton from '../BooksDisplay/BooksButton';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	backgroundColor: '#FAF9F8',
	justifyContent: 'center',
	justifyItems: 'center',

	// Override media queries injected by theme.mixins.toolbar
	'@media all': {
		minHeight: 128,
	},
}));
// TODO Fix the rendering for the Mobile device (xs display)
export default function Footer() {
	// Auth0 functionality
	const { user, isLoading } = useAuth0();
	return (
		<footer>
			<Box>
				<AppBar position="static">
					<StyledToolbar>
						<Stack direction="column">
							<Typography
								sx={{
									color: '#4E5865',
									display: 'inherit',
									justifyContent: 'center',
									fontFamily: 'Playfair Display',
									fontWeight: 700,
									fontSize: '20px',
									letterSpacing: '.3rem',
								}}
							>
								T.L Griffin
							</Typography>
							<Stack
								direction="row"
								spacing={{ xs: 0, sm: 3 }}
								sx={{ alignItems: 'center', justifyContent: 'center' }}
							>
								<Button
									sx={{
										fontFamily: 'inter',
										color: '#4E5865',
										margin: '1rem',
									}}
									href="/About"
								>
									About
								</Button>
								<BooksButton />
								<Button
									sx={{
										fontFamily: 'inter',
										color: '#4E5865',
										margin: '1rem',
									}}
									href="/Events"
								>
									Events
								</Button>
								<SubscribeButton />
								{!isLoading && !user && <LoginButton />}
								{!isLoading && user && <LogoutButton />}
							</Stack>
							<Divider sx={{ width: '100vw' }} />
							<Typography
								sx={{
									color: 'black',
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									fontSize: '14px',
									marginTop: 1,
								}}
							>
								© {new Date().getFullYear()} Tisha Griffin. All Rights Reserved.
							</Typography>
							<Typography
								sx={{
									color: 'black',
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									marginRight: 3.6,
									fontSize: '12px',
									fontStyle: 'oblique',
								}}
							>
								Web Design by:{' '}
								<a
									style={{
										textDecoration: 'none',
										paddingLeft: '2px',
										paddingRight: '2px',
									}}
									href="https://wingfieldadvertising.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Corbriyana Wingfield.{' '}
								</a>
							</Typography>
							<Typography
								sx={{
									color: 'black',
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									marginLeft: 8.8,
									fontSize: '12px',
									fontStyle: 'oblique',
								}}
							>
								Developers:{' '}
								<a
									style={{
										textDecoration: 'none',
										paddingLeft: '2px',
										paddingRight: '2px',
									}}
									href="https://christophersmithjr.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{' '}
									Christopher Smith Jr.
								</a>{' '}
								and
								<a
									style={{
										textDecoration: 'none',
										paddingLeft: '2px',
										paddingRight: '2px',
									}}
									href="https://brockabloomquist.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{' '}
									Brock Bloomquist.
								</a>
							</Typography>
						</Stack>
					</StyledToolbar>
				</AppBar>
			</Box>
		</footer>
	);
}
