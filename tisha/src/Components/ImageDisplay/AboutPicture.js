import React from 'react';
import '../../index.css';
import {  Box } from '@mui/material';

export default function AboutPicture({
	display,
	height,
	position,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
}) {
	return (
		<>
			<Box
				sx={{
					display,
					height,
					position,
					marginBottom,
					marginRight,
					marginLeft,
					marginTop,
				}}
			>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/Aboutme_Image.jpeg?alt=media&token=ad640cd9-2769-4f1a-8700-82d31cac171a"
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
