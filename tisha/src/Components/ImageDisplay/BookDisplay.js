import React from 'react';
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
					src="https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/Bookpic.jpg?alt=media&token=ba98885e-f06e-41e4-af0d-1c0b467546d6"
					alt="Profile"
					loading="lazy"
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						maxWidth: '100%',
						display: 'block',
					}}
				/>
			</Paper>
		</>
	);
}
