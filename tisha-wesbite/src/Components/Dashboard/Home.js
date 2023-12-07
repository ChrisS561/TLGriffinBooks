import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//TODO write out the links to the websites dashboards
const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				padding: 2,
			}}
		>
			<Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
				Welcome to Your Dashboard
			</Typography>
			<Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
				Explore and manage your data here.
			</Typography>
			<Typography
				variant="h6"
				color="primary"
				sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}
			>
				Coming Soon:
			</Typography>
			<Typography
				variant="h6"
				color="primary"
				sx={{ mt: 1, textAlign: 'center' }}
			>
				View Stripe Profits
			</Typography>
			<Typography
				variant="h6"
				color="primary"
				sx={{ mt: 1, textAlign: 'center' }}
			>
				Sending Newsletters
			</Typography>
			<Typography
				sx={{ color: 'red', mt: 4, fontStyle: 'italic', textAlign: 'center' }}
			>
				Warning: For the security of your sensitive information, please remember
				to sign out after each session. Leaving your account open may expose
				your data to potential risks.
			</Typography>
		</Box>
	);
};

export default Home;
