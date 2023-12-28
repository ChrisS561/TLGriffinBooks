import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Button, Divider, Grid, Typography } from '@mui/material';
import SubscribeButton from '../SubscribeButtonDisplay/SubscribeButton';
import BooksButton from '../Books/BooksButton';
import MobileFooter from './MobileFooter';
import { StyledToolbar } from '../../Style/Styling';

export default function Footer({ toolbarColor }) {
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
												href="/about"
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
									</Grid>
									<Divider sx={{ width: '100vw' }} />
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
										{/* <Grid item>
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
										</Grid> */}
									</Grid>
									<Typography
										sx={{
											color: '#72320A',
											fontSize: '14px',
											textAlign: 'center',
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
