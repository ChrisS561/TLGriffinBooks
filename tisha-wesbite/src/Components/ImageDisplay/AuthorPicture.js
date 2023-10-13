import React from 'react';
import bgremoved from '../../Images/home.png';
import '../../index.css';
import { Box } from '@mui/material';
import MobileAuthorPicture from './MobileAuthorPicture';

export default function AuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					height: { sm: '30rem', md: '35rem', lg: '35rem', xl: '40rem' },
					marginLeft: { md: '8rem', lg: '15rem', xl: '25rem' },
					marginRight: { md: '2rem' },
					marginBottom: { md: '8rem' },
				}}
			>
				<img
					src={bgremoved}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<MobileAuthorPicture/>
		</>
	);
}
