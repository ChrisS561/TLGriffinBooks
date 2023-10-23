import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../index.css';
import Navbar from '../Components/Navigation/NavBar';
import Footer from '../Components/Footer/Footer';
import AboutText from '../Components/About/AboutText';
import AboutPicture from '../Components/ImageDisplay/AboutPicture';

export default function About() {
	return (
		<>
			<div
				className="about-bg"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					height: '100vh',
					width: '100vw',
					paddingTop: '11rem',
				}}
			>
				<Navbar />
				<Stack
					direction="column"
					display={{ xs: 'none', sm: 'flex' }}
					sx={{
						alignItems: 'center',
						paddingBottom: { sm: '12rem', md: '9rem', lg: 0 },
					}}
				>
					<Box>
						<AboutPicture
							display={{ xs: 'none', sm: 'flex' }}
							marginTop={{ sm: 5, md: 5 }}
							height={{
								sm: '30rem',
								md: '32rem',
								lg: '33rem',
								xl: '36rem',
							}}
						/>
					</Box>
				</Stack>
				<Box
					sx={{
						display: 'block',
						paddingRight: { xs: 1, sm: 9, md: 20, lg: 40, xl: 80 },
						paddingTop: { sm: 14, md: 17, lg: 10, xl: 6 },
						paddingBottom: { md: 15, lg: 9, xl: 9 },
					}}
				>
					<Box>
						<AboutPicture
							display={{ xs: 'flex', sm: 'none' }}
							height={{ xs: '25rem' }}
							marginRight={{ xs: 5, sm: 0 }}
							marginBottom={1}
						/>
					</Box>
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							width: '100%',
							color: '#72320A',
							textTransform: 'capitalize',
							paddingLeft: { xs: 0, sm: 4, md: 10 },
							textAlign: 'left',
							letterSpacing: { xs: '2px', sm: '1px' },
							fontFamily: 'Inter, sans-serif',
							fontSize: { xs: 21, sm: 25, lg: 25 },
						}}
						gutterBottom
					>
						About The Author
					</Typography>
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							width: '100%',
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							paddingLeft: { xs: 0, sm: 4, md: 10 },
							textAlign: 'left',
							letterSpacing: { xs: '5px', sm: '10px' },
							fontFamily: 'Inter, sans-serif',
							fontSize: { xs: 36, sm: 48, lg: 60 },
						}}
					>
						T.L.
					</Typography>
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							width: '100%',
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							paddingLeft: { xs: 0, sm: 4, md: 10 },
							textAlign: 'left',
							letterSpacing: { xs: '5px', sm: '10px' },
							fontFamily: 'Inter, sans-serif',
							fontSize: { xs: 36, sm: 48, lg: 60 },
							marginBottom: { sm: 20, md: 10, lg: 0 },
						}}
						gutterBottom
					>
						GRIFFIN
					</Typography>
				</Box>
			</div>
			<AboutText />
			<Footer toolbarColor="#FFFFFF" />
			
		</>
	);
}
