import React from 'react';
import { Grid, Typography } from '@mui/material';
import '../index.css';
import Navbar from '../Components/Navigation/NavBar';
import BookSigningPicture from '../Components/ImageDisplay/BookSigningPicture';
import UpcomingEventsText from '../Pages/UpcomingEventsText';
import Footer from '../Components/Footer/Footer';

export default function UpcomingEvents() {
	return (
		<Grid
			container
			className="upcoming-events"
			alignItems="center"
			justifyContent={{ md: 'center' }}
		>
			<Navbar />

			<Grid item xs={12} sm={6} md={5} lg={3} margin={{ xs: 0, sm: 0 }}>
				<BookSigningPicture />
			</Grid>
			<Grid
				item
				xs={12}
				sm={6}
				display="flex"
				flexDirection="column"
				justifyContent="center"
				textAlign="left"
			>
				<Typography
					variant="h3"
					sx={{
						color: '#72320A',
						textTransform: 'capitalize',
						letterSpacing: { xs: '2px', sm: '1px' },
						fontFamily: 'Inter, sans-serif',
						fontSize: { xs: 21, sm: 25, lg: 25 },
						paddingLeft: { xs: 2, sm: 4 },
					}}
					gutterBottom
				>
					A Woman's Worth
				</Typography>
				<Typography
					variant="h3"
					sx={{
						color: '#72320A',
						textTransform: 'capitalize',
						fontWeight: 'bold',
						letterSpacing: { xs: '5px', sm: '10px' },
						fontFamily: 'Inter, sans-serif',
						fontSize: { xs: 36, sm: 48, lg: 60 },
						paddingLeft: { xs: 2, sm: 4 },
					}}
				>
					BOOK
				</Typography>
				<Typography
					variant="h3"
					sx={{
						color: '#72320A',
						textTransform: 'capitalize',
						fontWeight: 'bold',
						letterSpacing: { xs: '5px', sm: '10px' },
						fontFamily: 'Inter, sans-serif',
						fontSize: { xs: 36, sm: 48, lg: 60 },
						paddingLeft: { xs: 2, sm: 4 },
					}}
					gutterBottom
				>
					SIGNING
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<UpcomingEventsText />
			</Grid>
			<Grid item xs={12}>
				<Footer />
			</Grid>
		</Grid>
	);
}
