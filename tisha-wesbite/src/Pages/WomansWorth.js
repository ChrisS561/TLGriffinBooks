import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../index.css';
import Navbar from '../Components/Navigation/NavBar';
import Footer from '../Components/Footer/Footer';
import BookDisplay from '../Components/ImageDisplay/BookDisplay';
import BuynowButton from '../StripeFrontend/BuynowButton';
import WomansWorthText from '../Components/Books/WomansWorthText';
import PreviewButton from '../Components/Books/PreviewButton';

//TODO fix the height of the title and buttons on the tablet screen.
export default function WomansWorth() {
	console.log(window.innerWidth);

	return (
		<>
			<div
				className="womans-worth"
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
					display={{ display: { xs: 'none', sm: 'flex' } }}
					sx={{
						alignItems: 'center',
						paddingBottom: { sm: '12rem', md: '9rem', lg: 0 },
					}}
				>
					<Box>
						<BookDisplay
							display={{ xs: 'none', sm: 'flex' }}
							height={{
								sm: '25rem',
								md: '32rem',
								lg: '33rem',
								xl: '36rem',
							}}
							marginLeft={{sm:5,md:15,lg:0}}
						/>
					</Box>
				</Stack>
				<Box
					sx={{
						display: 'block',
						paddingRight: { xs: 1, sm: 11, md: 15, lg: 24, xl: 30 },
						paddingTop: { sm: 14, md: 17, lg: 10, xl: 6 },
						paddingBottom: { md: 15, lg: 9, xl: 9 },
					}}
				>
					<Box>
						<BookDisplay
							display={{ xs: 'flex', sm: 'none' }}
							height={{ xs: '25rem' }}
							width="17rem"
							marginBottom={2}
							marginLeft={5}
						/>
					</Box>
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							width: '99%',
							color: '#72320A',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							paddingLeft: { xs: 0, sm: 4, md: 11 },
							textAlign: 'left',
							letterSpacing: { xs: '5px', sm: '10px' },
							fontFamily: 'inter',
							fontSize: { xs: 36, sm: 48, lg: 60 },
							marginLeft: { xs: 6, sm: 0 },
						}}
						gutterBottom
					>
						A WOMAN'S WORTH
					</Typography>
					<Stack
						direction="row"
						spacing={{ md: 6, lg: 6 }}
						ml={{ lg: 3, xl: 10 }}
						display={{ xs: 'none', md: 'flex' }}
					>
						<PreviewButton display="block" />
						<BuynowButton display="block" />
					</Stack>
					<Stack
						direction="row"
						spacing={{ xs: 3, sm: 5 }}
						display={{ xs: 'flex', md: 'none' }}
						paddingLeft={{ xs: 6, sm: 0 }}
						mb={{ xs: 10, sm: 30, md: 0 }}
					>
						<PreviewButton display="block" />
						<BuynowButton display="block" />
					</Stack>
				</Box>
			</div>
			<WomansWorthText />
			<Footer />
		</>
	);
}
