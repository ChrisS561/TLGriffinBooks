import React from 'react';
import pic from '../../Images/UpcomingEvents.jpg';
import '../../index.css';
import { Box, Grid } from '@mui/material';

export default function MobileUpcomingEventsImage() {
return (
	<Grid container display={{ xs: 'flex', sm: 'none' }}>
		<Grid item xs={12}>
			<Box
				sx={{
					display: { xs: 'flex', sm: 'none' },
					marginLeft: 4,
					marginBottom:3,
					height: { xs: '22rem' },
				}}
			>
				<img
					src={pic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</Grid>
	</Grid>
);
}
