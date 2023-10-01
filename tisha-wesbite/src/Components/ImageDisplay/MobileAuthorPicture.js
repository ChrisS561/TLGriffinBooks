import React from 'react';
import pic from '../../Images/Attachment.jpg';
import '../../index.css';
import { Box } from '@mui/material';

export default function MobileAuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					marginLeft: 2,
					height: { xs: '26rem' },
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
