import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import '../index.css';
import Navbar from '../Components/Navigation/NavBar';
import Footer from '../Components/Footer/Footer';
import BookDisplay from '../Components/ImageDisplay/BookDisplay';
import BuynowButton from '../StripeFrontend/BuynowButton';

export default function WomansWorth() {
	console.log(window.innerWidth);
	const text = `In this deeply moving and spiritually uplifting autobiography, T.L. Griffin invites you on a remarkable journey through the intricate tapestry of life. Drawing inspiration from the diverse experiences and encounters that have shaped her path, Griffin reflects on the profound connection between her own journey and her walk with God.

This book is a testament to the power of spirituality, motivation, and encouragement. It serves as a gentle reminder that every person we meet has a purpose in our lives, whether for a fleeting moment or a lifetime. Griffin eloquently conveys the idea that God places individuals in our path, each with a unique role, to help us grow, learn, and make a positive impact.

As you immerse yourself in these pages, you’ll discover the transformative power of reaching out to someone in need, of being the light that guides others through their darkest moments. The key takeaway is a message of unwavering encouragement and a call to never judge others solely by their outward appearance, for in doing so, we may unknowingly entertain angels among us.

This inspirational autobiography is a heartfelt reminder of the beauty of life and the endless possibilities it offers. It’s a book that will leave you feeling uplifted, hopeful, and inspired to embrace each day with gratitude and a renewed sense of purpose. Read it, and let Griffin guide you on a journey that will make you feel good about life and the extraordinary potential it holds.`;

	return (
		<>
			<div
				className="womensworth"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					height: '100%',
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
							marginLeft={{ xl: 10 }}
						/>
					</Box>
					<BuynowButton display={{ xs: 'none', sm: 'flex' }} />
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
					<Typography
						variant="body1"
						sx={{
							display: 'block',
							textAlign: 'left',
							marginLeft: { xs: 0, sm: 5, md: 11 },
							alignSelf: 'center',
							width: { xs: '100%', sm: '100%', lg: '80%', xl: '80%' },
							marginBottom: 0,
							fontFamily: 'inter',
							fontSize: { xs: 14, md: 15, lg: 16 },
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
