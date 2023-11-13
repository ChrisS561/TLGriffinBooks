import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Divider, Grid, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton';
import BooksButton from '../Books/BooksButton';
import MobileFooter from './MobileFooter';
import { StyledToolbar } from '../../Style/Styling';

export default function Footer({ toolbarColor }) {
	// Auth0 functionality
	const { user, isLoading } = useAuth0();

	return (
		<footer>
			<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
				<AppBar position="sticky">
					<StyledToolbar style={{ backgroundColor: toolbarColor }}>
						<Grid container>
							<Grid item xs={12} md={12}>
								<Box sx={{ textAlign: 'center' }}>
									<Typography
										sx={{
											color: '#72320A',
											fontFamily: 'Playfair Display',
											fontWeight: 700,
											fontSize: '20px',
											letterSpacing: '.3rem',
											marginTop: '1rem',
										}}
									>
										T.L Griffin
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} md={12}>
								<Box sx={{ textAlign: 'center' }}>
									<Grid container justifyContent="center" spacing={2}>
										<Grid item>
											<Button
												sx={{
													fontFamily: 'inter',
													color: '#72320A',
													margin: '1rem',
												}}
												href="/"
											>
												Home
											</Button>
										</Grid>
										<Grid item>
											<Button
												sx={{
													fontFamily: 'inter',
													color: '#72320A',
													margin: '1rem',
												}}
												href="/About"
											>
												About
											</Button>
										</Grid>
										<Grid item>
											<BooksButton />
										</Grid>
										<Grid item>
											<SubscribeButton />
										</Grid>
										<Grid item>
											{!isLoading && !user && <LoginButton />}
											{!isLoading && user && <LogoutButton />}
										</Grid>
									</Grid>
									<Divider sx={{ width: '100vw' }} />
									<Typography
										sx={{
											color: '#72320A',
											fontSize: '14px',
											marginTop: 1,
										}}
									>
										© {new Date().getFullYear()} T.L. Griffin. All Rights
										Reserved.
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</StyledToolbar>
				</AppBar>
			</Box>
			<MobileFooter toolbarColor={toolbarColor} />
		</footer>
	);
}
