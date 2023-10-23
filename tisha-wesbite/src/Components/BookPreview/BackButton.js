import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function BackButton() {
	const navigate = useNavigate();

	return (
		<Button
			variant="contained"
			onClick={() => {
				navigate(-1);
			}}
			color="info"
			sx={{
				transition:
					'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
				'&:hover': {
					boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
					transform: 'scale(1.05)', // Slight scale on hover
				},
				display: 'block',
				width: '100%',
				maxWidth: '150px',
				fontFamily: 'Inter, sans-serif', 
				fontSize: '16px', 
				letterSpacing: '1px', 
				textAlign: 'center',
                ml:{xs:2,sm:4}
			}}
		>
			Go Back
		</Button>
	);
}
