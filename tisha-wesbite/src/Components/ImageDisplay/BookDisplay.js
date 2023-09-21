import React from 'react';
import BookPic from '../../Images/BookPic.png';
import '../../index.css';
import { Box } from '@mui/material';

export default function BookDisplay() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					height: { xs: '26rem', sm: '30rem', md: '35rem', lg: '35rem',xl:'40rem' },
					marginRight: {  md: '2rem' },
					marginBottom: { md: '8rem' },
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
