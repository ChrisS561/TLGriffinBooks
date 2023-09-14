import React from 'react';
import { Box, Button, Typography } from '@mui/material';
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
			<AuthorPicture />
			<Box
				sx={{
					display: 'block',
					width: '100vw',
					marginRight: { xs: 1, sm: 11, md: 15, lg: 24 },
					marginTop: { sm: 5, lg: 0 },
					marginBottom: { md: 15, lg: 9 },
				}}
			>
				<Typography
					variant="h3"
					sx={{
						display: 'block',
						fontFamily: 'Playfair Display',
						fontSize: { xs: 30, sm: 50 },
					}}
					gutterBottom
				>
					Spiritual Author
				</Typography>
				<Typography
					variant="body1"
					sx={{
						display: 'block',
						textAlign: 'left',
						alignSelf: 'center',
						marginBottom: 3,
						fontFamily: 'inter',
						fontSize: { xs: 14, sm: '' },
						position: { xs: 'relative', sm: '' },
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

				<div class="animate__animated animate__headShake animate__delay-5s 5s">
					<Button
						variant="outlined"
						href="#About"
						color="info"
						onClick={() => {
							alert('click');
						}}
						sx={{
							display: 'block',
							width: { xs: '10rem', sm: '15rem', md: '11rem' },
							fontFamily: 'inter',
						}}
					>
						Read More
					</Button>
				</div>
			</Box>
		</div>
	);
}
