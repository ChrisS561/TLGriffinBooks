import React from 'react';
import UpcomingeventsPic from '../../Images/UpcomingEvents.jpg';
import '../../index.css';
import { Box } from '@mui/material';
import MobileUpcomingEventsImage from './MobileUpcomingEventsImage';

export default function UpcomingEventsImage() {
	return (
		<>
		
			<Box
				sx={{
					display: { xs: 'none', sm: 'flex' },
					height: { sm: '22rem', md: '25rem', lg: '30rem', xl: '35rem' },
                    paddingTop:{sm:5,md:0},
				}}
			>
				<img
					src={UpcomingeventsPic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<MobileUpcomingEventsImage />
		</>
	);
}
