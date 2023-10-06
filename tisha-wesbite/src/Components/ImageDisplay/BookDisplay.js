import React from 'react';
import BookPic from '../../Images/BookPic.png';
import '../../index.css';
import { Box } from '@mui/material';
import BuynowButton from '../../StripeApi/BuynowButton';

export default function BookDisplay({height,position}) {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					height,
					position,
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
