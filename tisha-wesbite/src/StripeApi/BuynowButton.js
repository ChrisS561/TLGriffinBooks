import { Button } from '@mui/material';
import React from 'react'

export default function BuynowButton() {
  return (
		<Button
			variant="contained"
			color="info"
			sx={{
				transition:
					'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
				':hover': {
					boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
					animation: 'shake 0.5s',
				},
				display: 'block',
				width: '100%',
				maxWidth: '10rem',
				fontFamily: 'inter',
				fontSize: '15px',
				letterSpacing: '3px',
                position:'absolute',
                bottom:"7rem",
                left:"10rem",
			}}
		>
			Buy Now
		</Button>
	);
}
