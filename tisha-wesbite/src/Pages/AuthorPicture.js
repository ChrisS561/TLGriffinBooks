import React from 'react';
import AuthorPic from '../Images/AuntTisha.jpg';
import AuthorPic1 from '../Images/AuntTisha.png';
import '../index.css';
import { Box } from '@mui/material';

export default function AuthorPicture() {
	return (
		// Medium 900width+
		<>
			<Box
				sx={{
					display: { xs: 'none', md: 'flex' },
					height: '45rem',
					marginRight: '5rem',
				}}
			>
				<img
					src={AuthorPic1}
					alt="Profile"
					// className=" author-Picture "
					loading="lazy"
				/>
			</Box>
			{/* Smaller Screens < 900width */}
			<Box
				sx={{
					display: { xs: 'flex', md: 'none' },
				}}
			>
				<img
					src={AuthorPic1}
					alt="Profile"
					className=" author-Picture "
					loading="lazy"
				/>
			</Box>
		</>
	);
}
