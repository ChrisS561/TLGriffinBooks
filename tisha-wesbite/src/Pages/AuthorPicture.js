import React from 'react';
import AuthorPic1 from '../Images/AuntTisha.png';
import '../index.css';
import { Box } from '@mui/material';

export default function AuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: 'flex',
					height: { xs: '20rem', sm: '30rem', md: '35rem', lg: '40rem' },
					marginRight: { md: '2rem' },
					marginBottom: { md: '8rem' },
					transition: 'transform 0.2s ease-in-out', // Add a hover effect
					'&:hover': {
						transform: 'scale(1.05)', // Scale up the image on hover
					},
				}}
			>
				<img
					src={AuthorPic1}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</>
	);
}
