import React from 'react';
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
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: { sm: '5rem', md: '8rem', lg: '15rem', xl: '25rem' },
					marginRight: { md: '2rem' },
					marginBottom: { sm: '8rem' },
				}}
			>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/tlgriffinbooks.appspot.com/o/Homepage_Author_Pic.jpg?alt=media&token=45a3176c-b869-4a50-bb61-e2a1ba7c77bb"
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
