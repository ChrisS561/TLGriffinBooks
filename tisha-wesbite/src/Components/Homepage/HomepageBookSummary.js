import React from 'react';
import '../../index.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import BookDisplay from '../ImageDisplay/BookDisplay';

export default function AuthorBookDisplay() {
	return (
		<div className="book-display">
			<Container>
				<Grid container spacing={3}>
					<Grid
						item
						xs={12}
						sm={6}
						order={{ xs: 2 }}
						sx={{
							marginLeft: { sm: 4, md: 6, lg: 12 },
							WebkitAlignItems: 'center', // Safari
							WebkitJustifyContent: 'center', // Safari
							display: '-webkit-flex', // Safari
							flexDirection: 'column',
						}}
					>
						<Box>
							<Typography
								variant="h3"
								sx={{
									color: '#72320A',
									textTransform: 'capitalize',
									fontWeight: 'bold',
									letterSpacing: '5px',
									fontFamily: 'inter',
									fontSize: { xs: 36, sm: 48, lg: 60 },
								}}
								gutterBottom
							>
								WORK
							</Typography>
							<Typography
								variant="body1"
								sx={{
									textAlign: 'left',
									alignSelf: 'center',
									marginBottom: 3,
									fontFamily: 'inter',
									fontSize: { xs: 14, lg: 16 },
									color: '#72320A',
								}}
								gutterBottom
							>
								T.L. Griffin's moving autobiography, A Woman’s Worth explores
								life's intricate tapestry, finding inspiration in diverse
								experiences. It emphasizes spirituality's power, encouraging us
								to connect with others and embrace the hidden potential in every
								encounter. Griffin's heartfelt reminder to never judge based on
								appearances uplifts and inspires, making each day brim with
								purpose.
							</Typography>
							<Button
								variant="contained"
								href="/A-Womans-Worth"
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
									maxWidth: '11rem',
									fontFamily: 'inter',
									fontSize: '15px',
									letterSpacing: '3px',
									textAlign: 'center',
									marginBottom: { xs: 5, md: 0 },
								}}
							>
								Read More
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12} sm={5} order={{ xs: 1, sm: 2 }}>
						<BookDisplay
							display="block"
							position="relative"
							marginTop={{ xs: 7, sm: 8, md: 2, lg: 10 }}
							marginBottom={{ xs: 0, sm: 10 }}
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
