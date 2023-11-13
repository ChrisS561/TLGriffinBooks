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
					margin,
					overflow: 'hidden',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img
					src={BookPic}
					alt="Profile"
					loading="lazy"
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						maxWidth:"100%",
						display: 'block',
					}}
				/>
			</Paper>
		</>
	);
}
