import React from 'react';
import '../../index.css';
import { Box } from '@mui/material';

export default function SubscribeButtonImage() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					height: {
						xs: '10rem',
						sm: '20rem',
					},
					ml: 4,
					mt: 6,
				}}
			>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/Aboutme_Image.jpeg?alt=media&token=ad640cd9-2769-4f1a-8700-82d31cac171a"
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'contain' }}
				/>
			</Box>
		</>
	);
}
