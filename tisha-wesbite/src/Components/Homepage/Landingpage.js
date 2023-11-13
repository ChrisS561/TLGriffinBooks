import React, { useEffect, useState } from 'react';
import backgroundpic from '../../Images/backgroundimage.jpeg';
import { Box, Typography } from '@mui/material';
import '../../index.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const styles = {
	backgroundImage: `url(${backgroundpic})`,
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
				src={backgroundpic}
				alt="Background"
				style={{ display: 'none' }}
				onLoad={handleImageLoad}
			/>
			<Typography
				className={fadeIn ? 'fadeIn 2s ease-in' : 'none'}
				sx={{
					display: 'flex',
					color: '#72320A',
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
