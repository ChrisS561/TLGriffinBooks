import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import Navbar from '../Components/Navigation/NavBar';
import Footer from '../Components/Footer/Footer';
import BookDisplay from '../Components/ImageDisplay/BookDisplay';
import BuynowButton from '../StripeFrontend/BuynowButton';
import WomansWorthText from '../Components/Books/WomansWorthText';
import PreviewButton from '../Components/Books/PreviewButton';

const commonBookDisplayStyle = {
	display: 'block',
	paddingRight: { xs: 1, sm: 0, md: 15, lg: 24, xl: 30 },
	paddingTop: { sm: 12, md: 17, lg: 10, xl: 6 },
	paddingBottom: { md: 15, lg: 9, xl: 9 },
};

const titleStyles = {
	display: 'block',
	width: 'auto',
	color: '#72320A',
	alignItems:"center",
	fontWeight: 'bold',
	paddingLeft: { xs: 0, sm: 3, md: 10 },
	textAlign: 'left',
	letterSpacing: { xs: '5px', sm: '10px' },
	fontFamily: 'inter',
	fontSize: { xs: 36, sm: 48, lg: 60 },
	marginTop: { xs:2,sm:1,md: 6, lg: 15, xl: 25 },
};

const womansWorthContainerStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export default function WomansWorth() {
	return (
		<>
			<div className="womans-worth" style={womansWorthContainerStyle}>
				<Navbar />
				<Grid container>
					<Grid
						item
						ml={{ sm:10,md: 15, lg: 35, xl: 40 }}
						mt={{ sm: 10, md: 5, xl: 5 }}
						xs={12}
						sm={1}
						md={4}
						lg={3}
					>
						<BookDisplay display={{ xs: 'none', md: 'flex' }} />
					</Grid>
					<Grid item xs={11} sm={6} md={6} lg={6} sx={commonBookDisplayStyle}>
						<Box>
							<BookDisplay display={{ xs: 'flex', md: 'none' }} />
						</Box>
						<Typography variant="h3" sx={titleStyles} gutterBottom>
							A WOMAN'S WORTH
						</Typography>
						<Stack
							direction="row"
							spacing={2}
							ml={{ lg: 3, xl: 10 }}
							display={{ xs: 'none', md: 'flex' }}
						>
							<PreviewButton display="block" />
							<BuynowButton display="block" />
						</Stack>
						<Stack
							direction="row"
							spacing={{ xs: 2, sm: 2 }}
							display={{ xs: 'flex', md: 'none' }}
							paddingLeft={{ xs: 0, sm: 0 }}
							mb={{ xs: 0, sm: 5, md: 0 }}
						>
							<PreviewButton display="block" />
							<BuynowButton display="block" />
						</Stack>
					</Grid>
				</Grid>
			</div>
			<WomansWorthText />
			<Footer />
		</>
	);
}
