import React from 'react';
import SubscribeImage from '../../Images/AuntTisha.jpeg';
import '../../index.css';
import { Box } from '@mui/material';

export default function SubscribeButtonImage() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					height: {
						xs: '10rem',
						sm: '20rem',
					},
                    ml:4,
                    mt:7
				}}
			>
				<img
					src={SubscribeImage}
					alt="Profile"
					loading="lazy"
					style={{ objectFit:'contain' }}
				/>
			</Box>
		</>
	);
}
