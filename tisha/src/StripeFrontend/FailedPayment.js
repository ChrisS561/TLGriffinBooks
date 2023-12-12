import React from 'react';
import { Grid, Typography, Paper, IconButton } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import NavBar from '../Components/Navigation/NavBar';

const FailedPayment = () => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			style={{
				minHeight: '100vh',
				background: '#E6E2DF',
				color: 'black',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<NavBar />
			<Grid item xs={10} sm={6} md={4}>
				<Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
					<IconButton
						color="error"
						style={{ fontSize: 80, marginBottom: '16px' }}
					>
						<HighlightOffOutlinedIcon fontSize="inherit" />
					</IconButton>
					<Typography variant="h4" color="error" gutterBottom>
						Payment Failed
					</Typography>
					<Typography variant="body1">
						We're sorry, but your payment failed. Please try again later.
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default FailedPayment;
