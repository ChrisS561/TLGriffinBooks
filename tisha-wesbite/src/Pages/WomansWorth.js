import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../index.css';
import Navbar from '../Components/Navigation/NavBar';
import Footer from '../Components/Footer/Footer';
import BookDisplay from '../Components/ImageDisplay/BookDisplay';
import BuynowButton from '../StripeApi/BuynowButton';

export default function WomansWorth() {
	console.log(window.innerWidth);
	const text =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Nam libero justo laoreet sit amet cursus sit amet. Rutrum quisque non tellus orci ac auctor augue. Facilisis sed odio morbi quis commodo. Consequat semper viverra nam libero justo laoreet sit amet. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. \n \n Sem et tortor consequat id porta nibh venenatis. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Leo a diam sollicitudin tempor id eu nisl nunc. Semper risus in hendrerit gravida rutrum quisque. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Purus faucibus ornare suspendisse sed nisi lacus. Ut faucibus pulvinar elementum integer. Non diam phasellus vestibulum lorem sed risus ultricies. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Id cursus metus aliquam eleifend mi in nulla. Fusce ut placerat orci nulla pellentesque dignissim. Neque vitae tempus quam pellentesque nec nam. Senectus et netus et malesuada fames. \n \n Ultricies lacus sed turpis tincidunt id. Adipiscing vitae proin sagittis nisl rhoncus. Dui accumsan sit amet nulla facilisi morbi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Facilisi cras fermentum odio eu feugiat pretium nibh. Id aliquet risus feugiat in ante metus. Elementum facilisis leo vel fringilla est. Ac tortor dignissim convallis aenean et tortor at. Ultricies mi eget mauris pharetra et ultrices neque. Amet facilisis magna etiam tempor. Non blandit massa enim nec. Ac turpis egestas maecenas pharetra convallis posuere morbi.';
	return (
		<>
			<div
				className="womensworth"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					height: '100%',
					paddingTop: '6rem',
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
							marginLeft={{ xl: 10 }}
						/>
					</Box>
					<BuynowButton display={{ xs: 'none', sm: 'flex' }} />
				</Stack>
				<Box
					sx={{
						display: 'block',
						// width: '100vw',
						paddingRight: { xs: 1, sm: 11, md: 15, lg: 24, xl: 35 },
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
					<Typography
						variant="body1"
						sx={{
							display: 'block',
							textAlign: 'left',
							marginLeft: { xs: 0, sm: 5, md: 11 },
							alignSelf: 'center',
							width: { xs: '100%', sm: '100%', xl: '70%' },
							marginBottom: 3,
							fontFamily: 'inter',
							fontSize: { xs: 14, lg: 16 },
							color: '#677884',
							whiteSpace: 'pre-line',
						}}
						gutterBottom
					>
						{text}
					</Typography>
					<BuynowButton display={{ sx: 'block', sm: 'none' }} />
				</Box>
			</div>
			<Footer />
		</>
	);
}
