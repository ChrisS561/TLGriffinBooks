import React from 'react';
import AuthorPic1 from '../Images/AuntTisha.png';
import '../index.css';
import { Box } from '@mui/material';

export default function AuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: 'flex',
					height: { xs: '18rem', sm: '30rem', md: '35rem' },
					marginRight: { md: '2rem' },
					marginBottom: { md: '8rem' },
				}}
			>
				<img src={AuthorPic1} alt="Profile" loading="lazy" />
			</Box>
		</>
	);
}
