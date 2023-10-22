import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

export default function PreviewText() {
	const firstColumnText = `As I begin my journey of life, I realize the true meaning of my values, my contribution to myself, and my true worth. My journey starts with observing my life, the people around me, and how this world receives a real woman. In this life, you are born into this world with the only thing that humans know, the love of your mother. She begins to set the platform of your life. The love of your mother is your beginning. She can teach you to trust and love all things of life that allow you to grow and see nothing is stronger than a mother's love. We sometimes take this blessing for granted when your mother does love and care what happens to us. You will never miss what you have until it's gone. Cherish the time you have now with your mothers; you'll have peace if she leaves this world tomorrow with knowing you honored and respected her.`;
	const secondColumnText = `A mother is a beacon of light that shines bright to light up this world. A mother endures many struggles, disappointments, tears, and pain. A mother can take the place of many roles played, wearing many hats to bring joy to others each day. A mother will stand by you even when you turn her away. Sharing her love at every turn you face in life along the way. She brings hope when there is none found nowhere in sight. She prays and pleads with all her might. Having this unique role is a blessing from God, never to complain while loving your faults even when the road gets hard. Praying every day that your seed will grow and will always overcome the trials of life, and memories made will make your seed strong. Becoming better with knowledge and lessons learned from the generations before, better human beings with a winning team will guarantee another generation has won.`;

	return (
		<Box sx={{ padding: 2 }}>
			<Typography
				variant="h1"
				sx={{
					display: 'block',
					fontWeight: 'bold',
					textAlign: 'left',
					fontFamily: 'Arial, sans-serif',
					fontSize: { xs: 24, md: 28, lg: 32 },
					color: '#4E5865',
				}}
				gutterBottom
			>
				A Woman's Worth
			</Typography>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={2}
				sx={{ height: '500px', overflow: 'hidden', overflowY: 'scroll' }}
			>
				<Typography
					variant="body1"
					sx={{
						display: 'block',
						textAlign: 'left',
						fontFamily: 'Arial, sans-serif',
						fontSize: { xs: 16, md: 18, lg: 20 },
						color: '#555',
						whiteSpace: 'pre-line',
					}}
					gutterBottom
				>
					{firstColumnText}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						display: 'block',
						textAlign: 'left',
						fontFamily: 'Arial, sans-serif',
						fontSize: { xs: 16, md: 18, lg: 20 },
						color: '#555',
						whiteSpace: 'pre-line',
					}}
					gutterBottom
				>
					{secondColumnText}
				</Typography>
			</Stack>
		</Box>
	);
}
