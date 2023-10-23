import React from 'react'
import backgroundpic from "../../Images/backgroundimage.jpeg"
import { Typography } from '@mui/material';

  const styles = {
		backgroundImage: `url(${backgroundpic})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
		width: '100vw',
	};

export default function Landingpage() {

  return (
		<div style={styles}>
			<Typography
				sx={{
					display: 'flex',
					color: '#72320A',
					textTransform: 'capitalize',
					fontWeight: 'bold',
					textAlign: 'center',
					letterSpacing: '20px',
					fontFamily: 'Playfair Display',
					margin: '0 auto',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					fontSize: { xs: 36, sm: 48, lg: 100 },
				}}
			>
				T.L. GRIFFIN
			</Typography>
		</div>
	);
}
