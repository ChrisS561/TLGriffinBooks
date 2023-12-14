import React from 'react';
import '../../index.css';
import {  Box } from '@mui/material';

export default function BookSigningPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: 'flex',
					// marginBottom:10,
					marginTop: { xs: 10, sm: 25 },
					overflow: 'hidden',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/BookSigning.jpeg?alt=media&token=3306b793-74c3-415a-8621-653001f2b8ec"
					alt="Profile"
					loading="lazy"
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						maxWidth: '100%',
					}}
				/>
			</Box>
		</>
	);
}
