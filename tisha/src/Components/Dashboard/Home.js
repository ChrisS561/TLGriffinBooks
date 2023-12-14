import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardLinks from './CardForDashboardLinks';

const dashboardInformation = [
	{
		index: 1,
		name: 'Firebase',
		description:
			'Firebase is used for backend services such as database and storage. Check reads and writes of the database and storage.',
		links:
			'https://console.firebase.google.com/u/0/project/tisha-bookwebsite/overview',
	},
	{
		index: 2,
		name: 'SendGrid',
		description:
			'SendGrid is used for sending emails. Check your daily quota of sent emails.',
		links: 'https://app.sendgrid.com/',
	},
	{
		index: 3,
		name: 'Stripe',
		description:
			'Stripe is a payment processing platform. Check your profits and other financial information.',
		links: 'https://dashboard.stripe.com/test/dashboard',
	},
	{
		index: 4,
		name: 'GoDaddy',
		description:
			'GoDaddy is a domain registrar. Check the status and details of your domain.',
		links: 'https://www.godaddy.com/en-in',
	},
];

const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
				padding: 2,
			}}
		>
			<Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
				Welcome to Your Dashboard
			</Typography>
			<Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center' }}>
				Explore and manage your data here.
			</Typography>

			{/* Section for Links to Dashboards */}
			<DashboardLinks dashboardInformation={dashboardInformation} />

			{/* Link to Client Manual */}
			<Typography
				variant="h6"
				sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}
			>
				Client Manual:{' '}
				<a
					href={process.env.REACT_APP_CLIENT_MANUAL}
					target="_blank"
					rel="noopener noreferrer"
				>
					Open Client Manual
				</a>
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
				The ability to change events information on the homepage
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
