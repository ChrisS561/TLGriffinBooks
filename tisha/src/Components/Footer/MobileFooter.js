import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Divider, Grid, Stack, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import { StyledToolbar } from '../../Style/Styling';
import BooksButton from '../Books/BooksButton';

export default function MobileFooter({ toolbarColor }) {
	// Auth0 functionality

	return (
		<footer>
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<AppBar position="static">
					<StyledToolbar style={{ backgroundColor: toolbarColor }}>
						<Grid
							container
							justifyContent="center"
							alignItems="center"
							spacing={2}
						>
							<Grid item xs={12}>
								<Typography
									sx={{
										color: '#72320A',
										fontFamily: 'Playfair Display',
										fontWeight: 700,
										fontSize: '20px',
										letterSpacing: '.3rem',
										textAlign: 'center',
										marginTop: '1rem',
									}}
								>
									T.L Griffin
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Stack
									direction="row"
									spacing={0}
									flexWrap="wrap"
									justifyContent="center"
								>
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
									<Button
										sx={{
											fontFamily: 'inter',
											color: '#72320A',
											margin: '1rem',
										}}
										href="/about"
									>
										About
									</Button>
									<BooksButton />
									<SubscribeButton />
									<Grid item>
										<Button
											sx={{
												fontFamily: 'inter',
												color: '#72320A',
												margin: '1rem',
											}}
											href="/signin"
										>
											Login
										</Button>
									</Grid>
								</Stack>
							</Grid>
							<Grid item xs={12}>
								<Divider sx={{ width: '100vw' }} />
							</Grid>
							<Grid item xs={12}>
								<Grid container justifyContent="center" spacing={2}>
									<Grid item>
										<Button
											style={{
												fontFamily: 'Inter, sans-serif',
												color: '#72320A',
												textDecoration: 'none',
											}}
											href="mailto:tisha@tlgriffinbooks.com?subject=Regarding%20Issues&body=Hello%20Tisha,%0A%0AI'm%20facing%20an%20issue%20and%20would%20like%20to%20report%20it.%20Please%20provide%20assistance.%0A%0AThank%20you."
											target="_blank"
											rel="noopener noreferrer"
										>
											Contact Me
										</Button>
									</Grid>
									<Grid item>
										<Button
											style={{
												fontFamily: 'Inter, sans-serif',
												color: '#72320A',
												textDecoration: 'none',
											}}
											href="https://chrissmithjr.notion.site/T-L-Griffin-User-manual-df484e463e8943738c2ee440ec29f6d3?pvs=4"
											target="_blank"
											rel="noopener noreferrer"
										>
											User Manual
										</Button>
									</Grid>
								</Grid>
								<Typography
									sx={{
										display: 'inherit',
										justifyContent: 'center',
										alignContent: 'center',
										color: '#72320A',
										fontSize: '14px',
										marginTop: 1,
										textAlign: 'center',
									}}
								>
									© {new Date().getFullYear()} Tisha Griffin. All Rights
									Reserved.
								</Typography>
							</Grid>
						</Grid>
					</StyledToolbar>
				</AppBar>
			</Box>
		</footer>
	);
}
