import { Button } from '@mui/material';
import React from 'react';


export default function BuynowButton({ display }) {
	const handleBuyNow = () => {
			window.location.replace('https://buy.stripe.com/test_aEUaFmgHbaIsgnu7ss');
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
