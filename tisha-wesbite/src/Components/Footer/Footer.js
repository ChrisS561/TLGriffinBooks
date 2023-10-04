import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Divider, Stack, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import BooksButton from '../BooksDisplay/BooksButton';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import { StyledToolbar } from '../../Style/Styling';
import MobileFooter from './MobileFooter';

export default function Footer() {
	// Auth0 functionality
	const { user, isLoading } = useAuth0();
	return (
		<footer>
			<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
				<AppBar position="sticky">
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
							{/* <Stack
								direction="row"
								divider={<Divider orientation="vertical" flexItem />}
								spacing={1}
								sx={{
									display: 'inherit',
									justifyContent: 'center',
									alignContent: 'center',
									
								}}
							>
								<Typography
									sx={{
										color: 'black',
										display: 'inherit',
										justifyContent: 'center',
										alignContent: 'center',
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
							</Stack> */}
						</Stack>
					</StyledToolbar>
				</AppBar>
			</Box>
			<MobileFooter />
		</footer>
	);
}
