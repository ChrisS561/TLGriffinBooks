import React from 'react';
import '/Users/chris/Desktop/Github Repo/Tisha-BookWebsite/tisha-wesbite/src/index.css';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import AuthorPicture from '../AuthorPicture';

export default function AuthorBookDisplay() {
	return (
		<div className="bookdisplay">
			<Typography
				variant="h3"
				sx={{
					display: { xs: 'block', sm: 'none' },
					color: '#333',
					marginLeft:2,
					marginTop:5,
					textTransform: 'capitalize',
					fontWeight: 'bold',
					textAlign: 'left',
					fontFamily: 'Playfair Display,serif',
					fontSize: { xs: 36, sm: 48, lg: 60 },
				}}
			>
				My Work
			</Typography>
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<AuthorPicture />
			</Box>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: { sm: 25 },

					// margin: "0 auto",
				}}
			>
				<Stack>
					<Typography
						variant="h3"
						sx={{
							display: { xs: 'none', sm: 'block' },
							color: '#333',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							textAlign: 'center',
							fontFamily: 'Playfair Display,serif',
							fontSize: { xs: 36, sm: 48, lg: 60 },
						}}
					>
						My
					</Typography>
					<Typography
						variant="h3"
						sx={{
							display: { xs: 'none', sm: 'block' },
							color: '#333',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							textAlign: 'center',
							fontFamily: 'Playfair Display,serif',
							fontSize: { xs: 36, sm: 48, lg: 60 },
							marginLeft: 20,
						}}
						gutterBottom
					>
						Work
					</Typography>
					<Typography
						variant="body1"
						sx={{
							display: 'block',
							textAlign: 'left',
							alignSelf: 'center',
							marginBottom: 3,
							fontFamily: 'inter',
							fontSize: { xs: 14, lg: 16 },
							width: { xs: '100%', sm: '75%' },
							// position: 'relative',
							// height: { xs: '200px', sm: '' },
							// overflow: { xs: 'hidden', sm: '' },
							// overflowY: { xs: 'scroll', sm: '' },
							color: '#4E5865',
						}}
						gutterBottom
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<Button
						variant="outlined"
						href=""
						color="info"
						sx={{
							transition:
								'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
							':hover': {
								boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
								backgroundColor: '#FFBB57',
								color: '#333',
								animation: 'shake 0.5s',
							},
							display: 'block',
							width: '100%',
							maxWidth: '11rem',
							fontFamily: 'inter',
							fontSize: '15px',
							textAlign: 'center',
							marginLeft: { xs: 0, sm: 6, md: 9, lg: 11 },
						}}
					>
						Read More
					</Button>
				</Stack>
				<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
					<AuthorPicture />
				</Box>
			</Container>
		</div>
	);
}
