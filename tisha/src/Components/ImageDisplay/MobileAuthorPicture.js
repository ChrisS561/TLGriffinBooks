import React from 'react';
import pic from '../../Images/HomepagePic.jpg';
import '../../index.css';
import { Box } from '@mui/material';

export default function MobileAuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					margin:3
					
				}}
			>
				<img
					src={pic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover',width:"100%",height:"100%" }}
				/>
			</Box>
		</>
	);
}
