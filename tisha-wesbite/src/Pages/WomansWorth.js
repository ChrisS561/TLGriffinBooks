import React from 'react';
import '../index.css';
import NavBar from '../Components/Navigation/NavBar';
import BookDisplay from '../Components/ImageDisplay/BookDisplay';
import { Box, Stack, Typography } from '@mui/material';
import Footer from '../Components/Footer/Footer';
import BuynowButton from '../StripeApi/BuynowButton';

export default function WomansWorth() {
	return (
		<div className="womensworth">
			<NavBar />
			<Stack direction="row" spacing={20} marginTop={8} mr={5}>
				<Box/>
				<BookDisplay
					height={{
						xs: '26rem',
						sm: '30rem',
						md: '32rem',
						lg: '35rem',
						xl: '40rem',
					}}
				/>
				<Stack direction="column">
					<Typography
						variant="h3"
						sx={{
							display: 'block',
							color: '#4E5865',
							textTransform: 'capitalize',
							fontWeight: 'bold',
							marginRight: '100%',
							textAlign: 'left',
							letterSpacing: '5px',
							fontFamily: 'inter',
							fontSize: { xs: 36, sm: 48, lg: 60 },
							// paddingTop: 1,
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
							alignSelf: 'center',
							width: { xs: '100%', sm: '100%', xl: '80%' },
							marginRight: '21rem',
							marginBottom: 10,
							fontFamily: 'inter',
							fontSize: { xs: 14, lg: 16 },
							color: '#677884',
						}}
						gutterBottom
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
						massa sed elementum tempus egestas sed sed risus. Eget mi proin sed
						libero. Et tortor at risus viverra adipiscing at in tellus. Morbi
						tempus iaculis urna id. Volutpat blandit aliquam etiam erat velit
						scelerisque in dictum non. Lacus suspendisse faucibus interdum
						posuere lorem ipsum dolor. Id aliquet lectus proin nibh nisl
						condimentum. Integer eget aliquet nibh praesent tristique magna sit
						amet purus. Velit dignissim sodales ut eu sem integer vitae justo
						eget. Volutpat est velit egestas dui id ornare arcu odio ut. Aliquam
						etiam erat velit scelerisque in dictum. Luctus venenatis lectus
						magna fringilla urna porttitor rhoncus. Velit sed ullamcorper morbi
						tincidunt ornare massa eget egestas. Pellentesque id nibh tortor id
						aliquet lectus proin nibh. Dolor magna eget est lorem ipsum dolor
						sit amet consectetur. Tincidunt tortor aliquam nulla facilisi cras
						fermentum. Sed faucibus turpis in eu mi bibendum. Neque viverra
						justo nec ultrices dui sapien eget mi. Consequat semper viverra nam
						libero justo laoreet sit amet. Nunc non blandit massa enim nec dui
						nunc. Non pulvinar neque laoreet suspendisse interdum. Mi ipsum
						faucibus vitae aliquet nec ullamcorper. Urna cursus eget nunc
						scelerisque viverra mauris in aliquam. Faucibus et molestie ac
						feugiat sed lectus vestibulum. Scelerisque eleifend donec pretium
						vulputate. Morbi tristique senectus et netus et malesuada. Duis
						ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
						Iaculis nunc sed augue lacus viverra vitae congue eu. Phasellus
						egestas tellus rutrum tellus pellentesque. Tempus imperdiet nulla
						malesuada pellentesque elit eget gravida cum sociis. Ut pharetra sit
						amet aliquam id diam maecenas ultricies. Eget est lorem ipsum dolor
						sit amet. Id aliquet risus feugiat in. Sed blandit libero volutpat
						sed cras ornare arcu dui. Gravida quis blandit turpis cursus in hac.
						Morbi tristique senectus et netus et malesuada fames ac turpis. Arcu
						non sodales neque sodales ut etiam sit.
					</Typography>
				</Stack>
				<BuynowButton />
			</Stack>
			<Footer />
		</div>
	);
}
