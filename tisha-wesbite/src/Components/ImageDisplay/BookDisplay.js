import React from 'react';
import BookPic from '../../Images/BookPic.png';
import '../../index.css';
import { Box } from '@mui/material';

export default function BookDisplay({
	display,
	height,
	position,
	marginBottom,
	marginLeft,
	marginRight,
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
				}}
			>
				<img
					src={BookPic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</>
	);
}
