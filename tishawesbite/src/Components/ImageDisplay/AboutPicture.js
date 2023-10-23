import React from 'react';
import AboutPic from '../../Images/AuntTisha.jpeg';
import '../../index.css';
import { Box } from '@mui/material';

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
					marginTop
				}}
			>
				<img
					src={AboutPic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</>
	);
}
