import React from 'react';
import '../../index.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import BookDisplay from '../ImageDisplay/BookDisplay';

export default function AuthorBookDisplay() {
	return (
		<div className="book-display">
			<Typography
				variant="h3"
				sx={{
					display: { xs: 'block', sm: 'none' },
					paddingTop: 5,
					color: '#72320A',
					marginLeft: 2,
					textTransform: 'capitalize',
					fontWeight: 'bold',
					letterSpacing: '5px',
					textAlign: 'left',
					fontFamily: 'inter',
					fontSize: { xs: 36, sm: 48, lg: 60 },
				}}
			>
				MY WORK
			</Typography>
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<BookDisplay
					display="flex"
					height={{
						xs: '25rem',
						sm: '30rem',
						md: '35rem',
						lg: '35rem',
						xl: '40rem',
					}}
					marginBottom={3}
					marginLeft={2}
				/>
			</Box>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Stack>
					<Typography
						variant="h3"
						sx={{
							display: { xs: 'none', sm: 'block' },
							paddingTop: { sm: '14rem', md: '18rem', lg: '20rem' },
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							textAlign: 'left',
							marginLeft: { sm: 10, md: 11, lg: 15 },
							fontFamily: 'inter',
							letterSpacing: '5px',
							fontSize: { xs: 36, sm: 48, lg: 60 },
						}}
						gutterBottom
					>
						MY WORK
					</Typography>
					<Typography
						variant="body1"
						sx={{
							display: 'block',
							textAlign: 'left',
							alignSelf: 'center',
							marginBottom: 3,
							fontFamily: 'inter',
							fontSize: { xs: 14, lg: 16 },
							width: { xs: '100%', sm: '100%' },
							marginLeft: { sm: 20, md: 22, xl: 31 },
							color: '#72320A',
						}}
						gutterBottom
					>
						T.L. Griffin's moving autobiography, A Woman’s Worth explores life's
						intricate tapestry, finding inspiration in diverse experiences. It
						emphasizes spirituality's power, encouraging us to connect with
						others and embrace the hidden potential in every encounter.
						Griffin's heartfelt reminder to never judge based on appearances
						uplifts and inspires, making each day brim with purpose.
					</Typography>
					<Button
						variant="contained"
						href=""
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
							marginLeft: { xs: 0, sm: 10, md: 11, lg: 15 },
						}}
					>
						Read More
					</Button>
				</Stack>
				<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
					<BookDisplay
						display="flex"
						height={{ sm: '40%', md: '45%', lg: '50%' }}
						width={{ sm: '40%', md: '45%', lg: '50%' }}
						marginTop={{sm:"35%",md:'30%'}}
						marginLeft={'30%'}
					/>
				</Box>
			</Container>
		</div>
	);
}
