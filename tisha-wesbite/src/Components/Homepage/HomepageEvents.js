import React from 'react';
import '../../index.css';
import {  Stack, Typography } from '@mui/material';

// TODO Align the text to be left align.
// TODO Add a border around the text. 
export default function HomepageEvents() {
	return (
		<div className="events">
			<Stack
				direction="column"
				spacing={2}
				sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
			>
				<Typography
					variant="h3"
					sx={{
						paddingTop: '10rem',
						color: '#4E5865',
						textTransform: 'capitalize',
						fontWeight: 'bold',
						fontFamily: 'inter',
						letterSpacing: '3px',
						fontSize: { xs: 36, sm: 48, lg: 60 },
					}}
					gutterBottom
				>
					UPCOMING EVENTS
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: '#4E5865',
						textTransform: 'capitalize',
						fontFamily: 'inter',
						letterSpacing: '1px',
						fontSize: { xs: 36, sm: 48, lg: 30 },
					}}
					gutterBottom
				>
					A Womans Worth Book Signing
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: '#4E5865',
						textTransform: 'capitalize',
						textAlign: 'left',
						fontFamily: 'inter',
						letterSpacing: '1px',
						fontSize: { xs: 36, sm: 48, lg: 30 },
					}}
					gutterBottom
				>
					Austin, TX
				</Typography>
			</Stack>
		</div>
	);
}
