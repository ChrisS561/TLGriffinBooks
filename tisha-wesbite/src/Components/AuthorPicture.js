import React from 'react';
import bgremoved from "../Images/bg.png"
import pic from "../Images/Attachment.jpg"
import '../index.css';
import { Box } from '@mui/material';

export default function AuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: {xs:'none',sm:'flex'},
					height: { xs: '26rem', sm: '30rem', md: '35rem', lg: '40rem' },
					marginRight: { md: '2rem' },
					marginBottom: { md: '8rem' },
				}}
			>
				<img
					src={bgremoved}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<Box
				sx={{
					display: {xs:'flex',sm:"none"},
					marginLeft:2,
					height: { xs: '30rem'},
				}}
			>
				<img
					src={pic}
					alt="Profile"
					loading="lazy"
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</>
	);
}
