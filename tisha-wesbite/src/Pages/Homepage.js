import React from 'react';
import background from '../Images/background.jpg';
import { Button, Typography } from '@mui/material';
import '../index.css';
import AuthorPicture from './AuthorPicture';

// const styles = {
// 	backgroundImage: `url(${background})`,
// 	backgroundSize: 'cover',
// 	backgroundPosition: 'center',
// 	backgroundRepeat: 'no-repeat',
// 	height: '100vh',
// 	width: '100vw',
// };

export default function Homepage() {
	return (
		<div
			className="homepage"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				height: '100vh',
			}}
		>
			<AuthorPicture />
			<div style={{ width: '30%', marginRight: '14%' }}>
				<Typography
					variant="h6"
					sx={{
						display: { xs: 'none', md: 'flex' },
						textAlign: 'left',
						alignSelf: 'center',
						marginBottom: 3,
					}}
					gutterBottom
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Typography>
				{/* Large Screens (1200px+) */}
				<Button
					variant="outlined"
					href="#about"
					onClick={() => {
						alert('click');
					}}
					sx={{
						display: { xs: 'none', md: 'none',lg:'flex' },
						width: '15rem',
						ml: 8,
					}}
				>
					Learn More
				</Button>
				{/* Medium Screens (900px+)  */}
				<Button
					variant="outlined"
					href="#about"
					onClick={() => {
						alert('click');
					}}
					sx={{
						display: { xs: 'none', md: 'flex',lg:'none' },
						width: '15rem',
						ml: 3,
					}}
				>
					Learn More
				</Button>
			</div>
		</div>
	);
}
