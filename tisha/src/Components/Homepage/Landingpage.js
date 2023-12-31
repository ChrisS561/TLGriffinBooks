import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../../index.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const styles = {
	backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/LandingPage_Background.webp?alt=media&token=d70ba453-23f7-4d32-82b7-5b603eb30ef4')`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	height: '100vh',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	overflow: 'auto',
};

export default function Landingpage() {
	const [fadeIn, setFadeIn] = useState(true);
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	useEffect(() => {
		if (imageLoaded) {
			setFadeIn(true);
		}
	}, [imageLoaded]);

	return (
		<div style={styles}>
			<img
				src="https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/LandingPage_Background.webp?alt=media&token=d70ba453-23f7-4d32-82b7-5b603eb30ef4"
				alt="Background"
				style={{ display: 'none' }}
				onLoad={handleImageLoad}
				loading="lazy"
			/>
			<Typography
				className={fadeIn ? 'fadeIn 2s ease-in' : 'none'}
				sx={{
					display: 'flex',
					color: '#72320A',
					width: 'auto',
					textTransform: 'capitalize',
					fontWeight: 'bold',
					textAlign: 'center',
					letterSpacing: { xs: '15px', lg: '20px' },
					fontFamily: 'Playfair Display',
					margin: '0 auto',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					mt: 18,
					fontSize: { xs: 60, sm: 78, lg: 100 },
				}}
			>
				T.L. GRIFFIN
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginBottom: 10,
					animation: fadeIn ? 'fadeIn 2s ease-in' : 'none',
				}}
			>
				<Typography sx={{ color: '#72320A', fontSize: 16 }}>
					Uncover More About The Author
				</Typography>
				<ArrowDownwardIcon
					sx={{
						fontSize: 30,
						animation: 'spinning 2s linear infinite',
						color: '#72320A',
					}}
				/>
			</Box>
		</div>
	);
}
