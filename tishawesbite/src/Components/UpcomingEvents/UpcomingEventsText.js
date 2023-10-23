import { Typography } from '@mui/material';
import '../../index.css';
import React from 'react';

export default function UpcomingEventsText() {
	const standoutText = ' Mark your calendar';
	const text = ` for a bewitching event like no other! On October 29th, from 2 PM to 7 PM, T.L. Griffin will be hosting a spine-tingling book signing at the Halloween Trunk or Treat. This fantastic celebration is not to be missed, and there's something for everyone in the family!

While you're reveling in the Halloween spirit, make a stop at her book signing station, where she'll be ready to personalize copies of her latest book, A Woman's Worth, just for you. It's the perfect opportunity to get a signed copy and immerse yourself in a world of imagination and storytelling.`;

	return (
		<div className="about-text">
			<Typography
				variant="body1"
				sx={{
					display: 'block',
					textAlign: 'left',
					padding: { xs: 4, sm: 5, md: 7, lg: 10 },
					alignSelf: 'center',
					fontFamily: 'inter',
					fontSize: { xs: 14, md: 15, lg: 17 },
					color: '#677884',
					whiteSpace: 'pre-line',
				}}
				gutterBottom
			>
				<strong>{standoutText}</strong>,{text}
			</Typography>
		</div>
	);
}
