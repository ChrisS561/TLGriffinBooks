import React from 'react';
import '../../index.css';
import { Box, Button, Stack, Typography } from '@mui/material';
import HomepageEventsDate from './HomepageEventsDate';

//TODO
export default function HomepageEvents() {
	return (
		<div className="events">
			<Box>
				<Typography
					sx={{ display: { xs: 'none', sm: 'flex' }, paddingBottom: 13 }}
				/>
				<Box
					sx={{
						display: { xs: 'none', sm: 'flex' },
						flexDirection: 'column',
						alignItems: 'center',
						border: 'thick double #677884',
						borderWidth: 10,
						width: '70%',
						height: { sm: '20rem', md: '25rem' },
						margin: '0 auto',
					}}
				>
					<Stack
						direction="column"
						spacing={{ md: 1, lg: 3 }}
						sx={{
							display: { xs: 'none', sm: 'flex' },
							margin: '0 auto',
							paddingLeft: { md: 10, lg: 0 },
						}}
					>
						<Typography
							variant="h3"
							sx={{
								paddingTop: { sm: '4rem', md: '6rem', lg: '5rem' },
								color: '#4E5865',
								textTransform: 'capitalize',
								fontWeight: 'bold',
								fontFamily: 'inter',
								letterSpacing: '3px',
								fontSize: { sm: 35, md: 48, lg: 60 },
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
								fontSize: { sm: 25, md: 30 },
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
								fontSize: { sm: 25, md: 30 },
							}}
							gutterBottom
						>
							Austin, TX
						</Typography>

						<Button
							variant="contained"
							href="/Events"
							color="info"
							sx={{
								transition:
									'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
								':hover': {
									boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
									backgroundColor: '#FFBB57',
									color: '#333',
									animation: 'shake 0.5s',
								},
								display: 'block',
								width: '100%',
								maxWidth: '10rem',
								fontFamily: 'inter',
								fontSize: '15px',
								letterSpacing: '2px',
								textAlign: 'center',
							}}
						>
							VIEW DETAILS
						</Button>
					</Stack>
				</Box>
				<HomepageEventsDate />
			</Box>
		</div>
	);
}
