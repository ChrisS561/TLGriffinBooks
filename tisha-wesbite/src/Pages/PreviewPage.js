import { Typography } from '@mui/material';
import React from 'react';
import PreviewText from './PreviewText';
import '../index.css';
import BackButton from '../Components/BookPreview/BackButton';

export default function PreviewPage() {
	return (
		<div className="preview-page">
			<Typography
				variant="h5"
				noWrap
				component="a"
				href="/"
				sx={{
					display: 'flex',
					fontFamily: 'Playfair Display',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: '#72320A',
					textDecoration: 'none',
					padding: { xs: 2, sm: 4 },
					
				}}
			>
				T.L. Griffin
			</Typography>
			<BackButton/>
			<Typography
				variant="h3"
				sx={{
					display: 'flex',
					color: '#72320A',
					textTransform: 'capitalize',
					fontWeight: 'bold',
					textAlign: 'left',
					letterSpacing: '6px',
					fontFamily: 'inter',
					fontSize: { xs: 36, sm: 48, lg: 60 },
					justifyContent: { sm: 'center' },
					pl: { xs: 2, sm: 0 },
					paddingTop: { xs: 18, sm: 15, lg: 17, xl: 20 },
				}}
				gutterBottom
			>
				PREVIEW
			</Typography>
			<PreviewText />
		</div>
	);
}
