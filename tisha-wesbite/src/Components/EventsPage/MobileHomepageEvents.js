import React from 'react';
import '../../index.css';
import { Box, Button, Stack, Typography } from '@mui/material';
import HomepageEventsDate from './HomepageEventsDate';
import MobileHomepageEventsDate from './MobileHomepageEventsDate';

export default function MobileHomepageEvents() {
	return (
		<div className="events">
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<Stack direction="column">
					<Typography
						variant="h3"
						sx={{
							paddingTop: '2rem',
							paddingLeft: '1rem',
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: 36,
						}}
						gutterBottom
					>
						UPCOMING EVENTS
					</Typography>
					<Box
						sx={{
							display: { xs: 'flex', sm: 'none' },
							flexDirection: 'column',
							alignItems: 'center',
							border: 'thick double #677884',
							borderWidth: 10,
							width: '70%',
							height: '17rem',
                            marginLeft:"1rem"
							
						}}
					>
						<MobileHomepageEventsDate />
						<Stack
							direction="column"
							spacing={2}
							sx={{
								display: { xs: 'flex', sm: 'none' },
								margin: '0 auto',
								paddingLeft: 1,
							}}
						>
							<Typography
								variant="body1"
								sx={{
									color: '#4E5865',
									textTransform: 'capitalize',
									fontFamily: 'inter',
									letterSpacing: '1px',
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
				</Stack>
			</Box>
		</div>
	);
}
