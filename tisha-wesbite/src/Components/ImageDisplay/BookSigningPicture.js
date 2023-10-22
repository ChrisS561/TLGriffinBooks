import React from 'react';
import Booksigningpic from '../../Images/BookSigning.png';
import '../../index.css';
import { Box } from '@mui/material';
import MobileBookSigningPicture from './MobileBookSigningPicture';

export default function BookSigningPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					height: { sm: '30rem', md: '33rem', lg: '35rem', xl: '40rem' },
					marginLeft: { md: '8rem', lg: '10rem', xl: '25rem' },
					marginRight: { md: '2rem' },
					marginBottom: { md: '1rem' },
					marginTop: { sm: 15, md: 20, lg: 0 },
				}}
			>
				<img
					src={Booksigningpic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<MobileBookSigningPicture />
		</>
	);
}
