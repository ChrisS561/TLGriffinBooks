import React from 'react';
import { Typography } from '@mui/material';
import '../index.css';

export default function UpcomingEventsText() {
	const standoutText = 'Mark your calendar';
	const text = `
More Details About the Book Signing

Event: 14th Annual Women’s Health Motivation & Empowerment Conference

Location: ACC Eastview Campus, 3401 Webberville Rd, Austin, TX

Date & Time: November 2nd, 2024 from 8am - 4pm

Join me at the 14th Annual Women’s Health Motivation & Empowerment Conference, where I will be signing copies of my latest book! This empowering event celebrates women's health and wellness, featuring inspiring speakers, workshops, and community engagement.

What to Expect at the Book Signing:

- Meet & Greet: I’d love to connect with you and hear your thoughts on the book!
- Personalized Signatures: Get your book signed with a personal note.
- Discussion: I’ll share insights into the book's journey and answer any questions you may have.

Don’t miss out! Bring your friends and family, and join us in celebrating women’s empowerment and health. I can’t wait to see you there!
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
