import React from 'react';
import pic from '../../Images/BookSigning.png';
import '../../index.css';
import { Box } from '@mui/material';

export default function MobileBookSigningPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					marginLeft: 2,
					marginRight:5,
					height: { xs: '25rem' },
				}}
			>
				<img
					src={pic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</>
	);
}
