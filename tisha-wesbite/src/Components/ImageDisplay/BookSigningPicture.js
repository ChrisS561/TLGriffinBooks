import React from 'react';
import Booksigningpic from '../../Images/BookSigning.jpeg';
import '../../index.css';
import {  Box } from '@mui/material';
import MobileBookSigningPicture from './MobileBookSigningPicture';

export default function BookSigningPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: "flex",
					// marginBottom:10,
					marginTop:{xs:10,sm:25},
					overflow: 'hidden',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img
					src={Booksigningpic}
					alt="Profile"
					loading="lazy"
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						maxWidth: '100%',
					}}
				/>
			</Box>
		</>
	);
}
