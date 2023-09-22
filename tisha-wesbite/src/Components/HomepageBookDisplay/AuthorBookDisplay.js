import React from 'react';
import '../../index.css';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import AuthorPicture from '../ImageDisplay/AuthorPicture';
import BookDisplay from '../ImageDisplay/BookDisplay';

export default function AuthorBookDisplay() {
	return (
		<div className="bookdisplay">
			<Typography
				variant="h3"
				sx={{
					display: { xs: 'block', sm: 'none' },
					color: '#4E5865',
					marginLeft: 2,
					marginTop: 5,
					textTransform: 'capitalize',
					fontWeight: 'bold',
					letterSpacing: '5px',
					textAlign: 'left',
					fontFamily: 'Playfair Display,serif',
					fontSize: { xs: 36, sm: 48, lg: 60 },
				}}
			>
				MY WORK
			</Typography>
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<BookDisplay />
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
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							textAlign: 'left',
							marginLeft: 11,
							fontFamily: 'inter',
							letterSpacing: '5px',
							fontSize: { xs: 36, sm: 48, lg: 60 },
						}}
						gutterBottom
					>
						MY WORK
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
							color: '#677884',
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
						variant="contained"
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
							letterSpacing: '3px',
							textAlign: 'center',
							marginLeft: { xs: 0, sm: 6, md: 9, lg: 11 },
						}}
					>
						Read More
					</Button>
				</Stack>
				<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
					<BookDisplay />
				</Box>
			</Container>
		</div>
	);
}
