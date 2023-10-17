import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../index.css';
import Navbar from '../Components/Navigation/NavBar';
import Footer from '../Components/Footer/Footer';
import BookDisplay from '../Components/ImageDisplay/BookDisplay';
import BuynowButton from '../StripeFrontend/BuynowButton';
import WomansWorthText from '../Components/Books/WomansWorthText';
import PreviewButton from '../Components/Books/PreviewButton';


//TODO Make the buttons on the this page responsive. & the buttons aren't the same size. 
//TODO Fix the text below to make it presentable 
export default function WomansWorth() {
	console.log(window.innerWidth);

	return (
		<>
			<div
				className="womansworth"
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
								sm: '31rem',
								md: '32rem',
								lg: '33rem',
								xl: '36rem',
							}}
							// marginRight={{xl:"4rem"}}
						/>
					</Box>
				</Stack>
				<Box
					sx={{
						display: 'block',
						// width: '100vw',
						paddingRight: { xs: 1, sm: 11, md: 15, lg: 24, xl: 30 },
						paddingTop: { sm: 14, md: 17, lg: 10, xl: 6 },
						paddingBottom: { md: 15, lg: 9, xl: 9 },
					}}
				>
					<Box>
						<BookDisplay
							display={{ xs: 'flex', sm: 'none' }}
							height={{ xs: '30rem' }}
							marginRight={{ xs: 1, sm: 0 }}
						/>
					</Box>
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							paddingLeft: { xs: 0, sm: 4, md: 10 },
							textAlign: 'left',
							letterSpacing: '5px',
							fontFamily: 'inter',
							fontSize: { xs: 36, sm: 48, lg: 60 },
						}}
						gutterBottom
					>
						A WOMAN'S WORTH
					</Typography>
					<Stack
						direction="row"
						spacing={3}
						ml={{ xl: 10 }}
						display={{ xs: 'none', md: 'flex' }}
					>
						<PreviewButton display="block" />
						<BuynowButton display="block" />
					</Stack>
					<Stack
						direction="row"
						spacing={3}
						display={{ xs: 'flex', md: 'none' }}
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
