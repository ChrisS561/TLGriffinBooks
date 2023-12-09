import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const CardForDashboardLinks = ({ name, description, links }) => {
	return (
		<Card
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}
		>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
				<Button href={links} size="small" color="primary">
					Go to dashboard
				</Button>
			</CardActions>
		</Card>
	);
};

const DashboardLinks = ({ dashboardInformation }) => {
	return (
		<Box sx={{ mt: 4, textAlign: 'center' }}>
			<Typography variant="h4" sx={{ mb: 2 }}>
				QuickLinks Dashboard:
			</Typography>
			<Grid container spacing={2}>
				{dashboardInformation.map(({ index, name, description, links }) => (
					<Grid item xs={12} sm={6} md={6} lg={3} key={index}>
						<CardForDashboardLinks
							name={name}
							description={description}
							links={links}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default DashboardLinks;
