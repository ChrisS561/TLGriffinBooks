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
