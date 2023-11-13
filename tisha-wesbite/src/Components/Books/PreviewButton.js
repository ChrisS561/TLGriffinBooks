import { Button } from '@mui/material';
import React from 'react';

export default function PreviewButton(display) {
	return (
		<div>
			<Button
				fullWidth
				variant="contained"
				color="info"
				href="/Preview"
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
					marginLeft: { sm: '2rem', md: '5rem', lg: '4rem', xl: '1rem' },
					textAlign: 'center',
				}}
			>
				Preview
			</Button>
		</div>
	);
}
