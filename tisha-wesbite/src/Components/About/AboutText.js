import { Typography } from '@mui/material';
import '../../index.css';
import React from 'react';

export default function AboutText() {
	const firstNameInText = 'T.L.Griffin';
	const text = ` a passionate writer hailing from the vibrant city of Wichita Falls, Texas, and currently calling Austin, Texas, home. With over two decades of experience as a dedicated nurse, Griffin has honed her skills in care and compassion, instilling a deep sense of empathy in her. Griffin found her inspiration for writing through the remarkable women who have shaped her life. From her beloved mother and aunts to her inspiring sisters, these women instilled in her a burning desire to become a better person. Their unwavering support uplifted her, pushing her to become the person she is today.

Now, Griffin  aspires to pay it forward. In the near future, she hopes to use her words to uplift, motivate, and encourage people to inspire and support one another, with the ultimate goal of making the world a better place. She envisions herself as a beacon of positivity and a role model for those seeking to make a difference.

And here’s a fun fact about Griffin: despite her busy life, she finds solace in watching cartoons, a charming reminder that even adults can find joy in the simple pleasures of life.

Join Griffin on her journey of spreading positivity and making the world a brighter place through her heartfelt words.`;

	return (
		<div className="about-text">
			<Typography
				variant="body1"
				sx={{
					display: 'block',
					textAlign: 'left',
					padding: { xs: 4, sm: 5, md: 7, lg: 10 },
					alignSelf: 'center',
					marginBottom: 0,
					fontFamily: 'inter',
					fontSize: { xs: 14, md: 15, lg: 17 },
					color: '#677884',
					whiteSpace: 'pre-line',
				}}
				gutterBottom
			>
				<strong>{firstNameInText}</strong>,{text}
			</Typography>
		</div>
	);
}
