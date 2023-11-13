import React from 'react';
import { Typography } from '@mui/material';
import '../index.css';

export default function UpcomingEventsText() {
	const standoutText = 'Mark your calendar';
	const text = `
   Get ready for a magical winter wonderland like no other! On December 3rd, from 2 PM to 7 PM, T.L. Griffin will be hosting an enchanting book signing at the Festive Frost Fair. This spectacular celebration is not to be missed, and there's something for everyone in the family!

   While you're embracing the holiday spirit, make a stop at her book signing station, where she'll be ready to personalize copies of her latest book, A Winter's Tale, just for you. It's the perfect opportunity to get a signed copy and immerse yourself in a world of imagination and storytelling amid the twinkling lights and festive cheer.
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
				borderRadius: 8,
				whiteSpace: 'pre-line',
			}}
			gutterBottom
		>
			<strong>{standoutText}</strong>, {text}
		</Typography>
	);
}
