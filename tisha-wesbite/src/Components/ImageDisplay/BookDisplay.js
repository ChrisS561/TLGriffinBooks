import React from 'react';
import BookPic from '../../Images/Bookpic.jpg';
import '../../index.css';
import { Paper } from '@mui/material';

export default function BookDisplay({
	display,
	height,
	position,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	margin,
	width,
}) {
	return (
		<>
			<Paper
				elevation={24}
				sx={{
					display,
					height,
					width,
					position,
					marginBottom,
					marginTop,
					marginLeft,
					marginRight,
				}}
			>
				<img
					src={BookPic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Paper>
		</>
	);
}
