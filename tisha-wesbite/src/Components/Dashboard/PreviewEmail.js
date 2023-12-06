// Inside PreviewEmail component
import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

const PreviewEmail = ({ name, subject, fromEmail, toEmail, message }) => {
	const createMarkup = (html) => {
		return { __html: html };
	};

	return (
		<Grid container justifyContent="center" spacing={2} mb={5}>
			<Grid item xs={12} md={8} lg={6}>
				<Paper
					elevation={3}
					style={{
						padding: 20,
						border: '1px solid #e0e0e0',
						borderRadius: 10,
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					<div style={{ marginBottom: 20, textAlign: 'center' }}>
						<Typography
							variant="h5"
							style={{ color: '#333333', marginBottom: 20 }}
						>
							Subject: {subject}
						</Typography>
						<Typography
							style={{ color: '#555555', fontSize: 16, marginBottom: 10 }}
						>
							From: {fromEmail}
						</Typography>
					</div>
					<div
						className="email-body"
						style={{
							color: '#555555',
							fontSize: 16,
							lineHeight: 1.6,
							textAlign: 'center',
						}}
					>
						{name && (
							<Typography paragraph style={{ fontSize: 18, marginBottom: 10 }}>
								{name}
							</Typography>
						)}
						<Typography
							paragraph
							dangerouslySetInnerHTML={createMarkup(message)}
							style={{ marginBottom: 20 }}
						/>

						<Typography
							paragraph
							style={{ color: '#555555', fontSize: 16, marginTop: 20 }}
						>
							Regards,
						</Typography>
						<Typography style={{ color: '#555555', fontSize: 16 }}>
							The Newsletter Team
						</Typography>
					</div>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default PreviewEmail;
