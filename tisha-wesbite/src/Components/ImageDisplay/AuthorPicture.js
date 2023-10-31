import React from 'react';
import homepagepicture from '../../Images/HomepagePic.jpg';
import '../../index.css';
import {  Box } from '@mui/material';
import MobileAuthorPicture from './MobileAuthorPicture';

export default function AuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					marginLeft: { sm: '5rem', md: '8rem', lg: '15rem', xl: '25rem' },
					marginRight: { md: '2rem' },
					marginBottom: { md: '8rem' },
				}}
			>
				<img
					src={homepagepicture}
					alt="Profile"
					loading="lazy"
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
					}}
				/>
			</Box>
			<MobileAuthorPicture />
		</>
	);
}
