import { Typography } from '@mui/material';
import "../../index.css"
import React from 'react'

export default function WomansWorthText() {
    const text = `In this deeply moving and spiritually uplifting autobiography, T.L. Griffin invites you on a remarkable journey through the intricate tapestry of life. Drawing inspiration from the diverse experiences and encounters that have shaped her path, Griffin reflects on the profound connection between her own journey and her walk with God.

This book is a testament to the power of spirituality, motivation, and encouragement. It serves as a gentle reminder that every person we meet has a purpose in our lives, whether for a fleeting moment or a lifetime. Griffin eloquently conveys the idea that God places individuals in our path, each with a unique role, to help us grow, learn, and make a positive impact.

As you immerse yourself in these pages, you’ll discover the transformative power of reaching out to someone in need, of being the light that guides others through their darkest moments. The key takeaway is a message of unwavering encouragement and a call to never judge others solely by their outward appearance, for in doing so, we may unknowingly entertain angels among us.

This inspirational autobiography is a heartfelt reminder of the beauty of life and the endless possibilities it offers. It’s a book that will leave you feeling uplifted, hopeful, and inspired to embrace each day with gratitude and a renewed sense of purpose. Read it, and let Griffin guide you on a journey that will make you feel good about life and the extraordinary potential it holds.`;

  return (
		<div className="womans-worth-text">
			<Typography
				variant="body1"
				sx={{
					display: 'block',
					textAlign: 'left',
					padding: { xs: 4, sm: 5, md: 7, lg: 10 },
					alignSelf: 'center',
					marginBottom: 0,
					fontFamily: 'inter',
					fontSize: { xs: 14, md: 15, lg: 16 },
					color: '#72320A',
					whiteSpace: 'pre-line',
				}}
				gutterBottom
			>
				{text}
			</Typography>
		</div>
	);
}
