import React from 'react';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

export default function SuccessPayment() {
	return (
		<Grid
			container
			spacing={2}
			justifyContent="center"
			alignItems="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={12} textAlign="center">
				<CheckCircleIcon style={{ color: 'green', fontSize: '80px' }} />
				<Typography variant="h4" style={{ margin: '20px' }}>
					Payment Successful
				</Typography>
				<Typography>
					Thank you for purchasing our book. Your payment was successful.
				</Typography>
			</Grid>
		</Grid>
	);
}
