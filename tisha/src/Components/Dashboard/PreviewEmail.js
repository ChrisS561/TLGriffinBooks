// Inside PreviewEmail component
import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const NewsletterPreviewEmail = ({ name, message, image, unsubscribeLink }) => {
	const createMarkup = (html) => {
		return { __html: html };
	};

	return (
		<Grid container justifyContent="center" spacing={2} mb={5}>
			<Grid item xs={12} md={8} lg={6}>
				<Paper
					elevation={3}
					style={{
						padding: '2%',
						border: '1px solid #e0e0e0',
						borderRadius: 5,
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					{/* Dynamic Image */}
					<div style={{ textAlign: 'center' }}>
						<img
							src={image}
							alt="Exclusive Preview: T.L Griffin's Newsletter"
							height="300"
							width="600"
							style={{ margin: 'auto', maxWidth: '100%', height: 'auto' }}
						/>
					</div>

					{/* Dynamic Message */}
					<Typography
						paragraph
						style={{
							fontFamily: 'sans-serif',
							fontSize: 16,
							lineHeight: 1.3,
							color: '#666666',
							textAlign: 'left',
							padding: '2%',
						}}
					>
						{name},
					</Typography>
					<Typography
						paragraph
						style={{
							fontFamily: 'sans-serif',
							fontSize: 16,
							lineHeight: 1.3,
							color: '#666666',
							textAlign: 'left',
							padding: '2%',
						}}
						dangerouslySetInnerHTML={createMarkup(message)}
					/>

					{/* Footer */}
					<Typography
						style={{
							textAlign: 'center',
							padding: '4% 0',
							fontFamily: 'sans-serif',
							fontSize: 13,
							lineHeight: 1.2,
							color: '#666666',
						}}
					>
						You received this email because you opted in to our newsletter.
						<br />
						<br />
						Stay connected on social media:
						<a
							href="https://facebook.com/example"
							style={{ color: '#3b5998', textDecoration: 'none' }}
						>
							Facebook
						</a>
						<br />
						<br />
						<a
							href={unsubscribeLink}
							style={{ color: '#e74c3c', textDecoration: 'underline' }}
						>
							Unsubscribe
						</a>
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default NewsletterPreviewEmail;
