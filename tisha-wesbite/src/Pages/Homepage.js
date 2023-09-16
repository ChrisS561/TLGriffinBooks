import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import '../index.css';
import AuthorPicture from './AuthorPicture';

export default function Homepage() {
	//Standard is 1440
	console.log(window.innerWidth);
	return (
		<div
			className="homepage"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				height: '100vh',
			}}
		>
			<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
				<AuthorPicture />
			</Box>
			<Box
				sx={{
					display: 'block',
					width: '100vw',
					marginRight: { xs: 1, sm: 11, md: 15, lg: 24 },
					marginTop: { sm: 5, lg: 0 },
					marginBottom: { md: 15, lg: 9 },
				}}
			>
				<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
					<AuthorPicture />
				</Box>
				<Typography
					variant="h3"
					sx={{
						display: 'block',
						color: '#333',
						textTransform: 'capitalize',
						fontWeight: 'bold',
						textAlign: { xs: 'center', sm: 'left', lg: 'center' },
						fontFamily: 'Playfair Display,serif',
						fontSize: { xs: 36, sm: 48, lg: 60 },
					}}
					gutterBottom
				>
					Spiritual Author
				</Typography>
				<Typography
					variant="body1"
					sx={{
						display: 'block',
						textAlign: { xs: 'left', lg: 'center' },
						alignSelf: 'center',
						marginBottom: 3,
						fontFamily: 'inter',
						fontSize: { xs: 14, lg: 16 },
						position: 'relative',
						height: { xs: '200px', sm: '' },
						overflow: { xs: 'hidden', sm: '' },
						overflowY: { xs: 'scroll', sm: '' },
						color: '#4E5865',
					}}
					gutterBottom
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Typography>

				<Box
					// class="animate__animated animate__headShake animate__delay-5s 5s"
					sx={{
						display: 'block',
						width: { xs: '10rem', sm: '15rem', md: '11rem' },
						fontFamily: 'inter',
						alignItems: 'center',
						margin: { xs: '0 auto', sm:"0", lg: '0 auto' },
						justifyContent: 'center',
					}}
				>
					<Button
						variant="contained"
						href="About"
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
							maxWidth: '14rem',
							fontFamily: 'inter',
							fontSize: '15px',
							textAlign: 'center',
						}}
					>
						Read More
					</Button>
				</Box>
			</Box>
		</div>
	);
}
