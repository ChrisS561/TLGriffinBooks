import React from 'react';
import pic from '../../Images/UpcomingEvents.jpg';
import '../../index.css';
import { Box } from '@mui/material';

export default function MobileUpcomingEventsImage() {
	return (
		<>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					marginLeft: 2,
					height: { xs: '20rem' },
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
