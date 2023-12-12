import { Button } from '@mui/material';
import React from 'react';

export default function BuynowButton({ display }) {
	const stripeURL = process.env.REACT_APP_STRIPE_URL;
	const handleBuyNow = () => {
			window.location.replace(`${stripeURL}`);
	};
	return (
		<Button
			fullWidth
			variant="contained"
			color="info"
			onClick={handleBuyNow}
			sx={{
				transition:
					'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
				':hover': {
					boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
					animation: 'shake 0.5s',
				},
				display,
				width: 'auto',
				fontFamily: 'inter',
				fontSize: '15px',
				letterSpacing: '2px',
				textAlign: 'center',
			}}
		>
			Buy Now
		</Button>
	);
}
