import React from 'react';
import AboutPic from '../../Images/AuntTisha.jpeg';
import '../../index.css';
import {  Paper } from '@mui/material';

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
			<Paper elevation={24}
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
			</Paper>
		</>
	);
}
