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
					height: '40rem',
					marginRight: '5rem',
					marginBottom: "8rem"
				}}
			>
				<img
					src={AuthorPic1}
					alt="Profile"
					loading="lazy"
				/>
			</Box>
			{/* Smaller Screens < 900width */}
			<Box
				sx={{
					display: { xs: 'none', md: 'none' },
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
