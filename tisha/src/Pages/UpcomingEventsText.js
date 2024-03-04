import React from 'react';
import { Typography } from '@mui/material';
import '../index.css';

export default function UpcomingEventsText() {
	const standoutText = 'Mark your calendar';
	const text = `
   Are you ready to dive into a realm of literary enchantment like never before? 
   
   Join me on Saturday, March 9th, 2023, from 4 PM to 6 PM, at the captivating Half Price Books located at 2506 W. Parmer Ln, Austin, TX, for an unforgettable book signing event. 
   
   Let's embark on this journey together as we explore the magic of storytelling and meet the author in person. See you there!"
   `;
	return (
		<Typography
			variant="body1"
			sx={{
				display: 'block',
				textAlign: 'left',
				padding: { xs: 4, sm: 5, md: 7, lg: 10 },
				alignSelf: 'center',
				fontFamily: 'inter',
				fontSize: { xs: 16, md: 18, lg: 20 },
				color: '#72320A',
				backgroundColor: 'white', 
				// borderRadius: 8,
				whiteSpace: 'pre-line',
			}}
			gutterBottom
		>
			<strong>{standoutText}</strong>, {text}
		</Typography>
	);
}
