import React from 'react';
import '../../index.css';
import { Box, Button, Stack, Typography } from '@mui/material';
import { EventBusy as EventBusyIcon } from '@mui/icons-material';
import MobileHomepageEventsDate from './DateMobileHomepage'; // Import the Mobile version of the Date component
import { useRecoilValue } from 'recoil';
import { noUpcomingEventAtom } from '../../atoms';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function MobileEventsHomepage() {
	const noUpcomingEvents = useRecoilValue(noUpcomingEventAtom);
	return (
		<div className="events">
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<Stack direction="column">
					<Typography
						variant="h3"
						sx={{
							paddingTop: '2rem',
							paddingLeft: '1rem',
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontFamily: 'inter',
							letterSpacing: '3px',
							fontSize: 36,
						}}
						gutterBottom
					>
						{noUpcomingEvents ? (
							<>
								No Upcoming Events{' '}
								<EventBusyIcon
									sx={{
										fontSize: '2rem',
										verticalAlign: 'middle',
										marginLeft: '0.5rem',
									}}
								/>
							</>
						) : (
							'Upcoming Events'
						)}
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
							borderColor: '#72320A',
							marginLeft: '1rem',
						}}
					>
						{!noUpcomingEvents && <MobileHomepageEventsDate />}
						<Stack
							direction="column"
							spacing={2}
							sx={{
								display: { xs: 'flex', sm: 'none' },
								margin: '0 auto',
								paddingLeft: 1,
							}}
						>
							{noUpcomingEvents ? (
								<>
									<Typography
										variant="body1"
										sx={{
											color: '#72320A',
											textTransform: 'capitalize',
											fontFamily: 'inter',
											letterSpacing: '1px',
											fontSize: 25,
										}}
										gutterBottom
									>
										Check back later for more events!
									</Typography>
									<SentimentVeryDissatisfiedIcon
										sx={{
											fontSize: 40,
											color: '#72320A',
											marginTop: '1rem',
										}}
									/>
								</>
							) : (
								<>
									{/* Render upcoming events content */}
									<Typography
										variant="body1"
										sx={{
											color: '#72320A',
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
											color: '#72320A',
											textTransform: 'capitalize',
											textAlign: 'left',
											fontFamily: 'inter',
											letterSpacing: '1px',
										}}
										gutterBottom
									>
										Round Rock, TX
									</Typography>

									<Button
										variant="contained"
										href="/Upcoming-Events"
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
								</>
							)}
						</Stack>
					</Box>
				</Stack>
			</Box>
		</div>
	);
}
