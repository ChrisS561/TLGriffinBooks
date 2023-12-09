import React, { useState } from 'react';
import {
	Container,
	TextField,
	Button,
	TextareaAutosize,
	Typography,
	List,
	ListItem,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function UpdateEventInfo() {
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [time, setTime] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const PostData = async () => {
		setLoading(true);
		try {
			const response = await axios.post(
				// process.env.REACT_APP_SERVER_NEWSLETTER_API,
				{
					name,
					location,
					time,
					message,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			console.log(response.data);
			alert('Success: Event information updated successfully!');
			handleClear();
		} catch (error) {
			console.error(`Post error: ${error.message}`);
			alert(
				'Error: Failed to update event information. Please try again later.'
			);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Form submitted:', name, location, time, message);
		await PostData();
	};

	const handleClear = () => {
		setName('');
		setLocation('');
		setTime('');
		setMessage('');
	};

	return (
		<Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
			<Typography variant="h2" color="initial">
				Update Your Event Information!
			</Typography>
			<Typography variant="subtitle2" color="initial" ml={2}>
				<Typography variant="subtitle2" color="initial" ml={2}>
					<List sx={{ listStyleType: 'disc' }}>
						<ListItem sx={{ display: 'list-item' }}>
							<strong>Event Name:</strong> The name of the event or header you
							want participants to see. <br />
							(e.g., "A Woman's Worth Book Signing") (Required*)
						</ListItem>
						<ListItem sx={{ display: 'list-item' }}>
							<strong>Location:</strong> The location of the event. (e.g.,
							"Austin, TX") (Required*)
						</ListItem>
						<ListItem sx={{ display: 'list-item' }}>
							<strong>Date and Time:</strong> The date and time of the event.
							(e.g., "December 30, 2023 at 1:58:25 PM UTC-6") (Required*)
						</ListItem>
						<ListItem sx={{ display: 'list-item' }}>
							<strong>Message:</strong> The message or details about the event.
							(Required*)
						</ListItem>
					</List>
					<Typography variant="subtitle2" color="textSecondary" paragraph>
						Fill in the details below to update your event information. You can
						use HTML tags to style your message.
					</Typography>
				</Typography>
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Event Name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
					required
					margin="normal"
				/>
				<TextField
					label="Location"
					type="text"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Date and Time"
					type="text"
					value={time}
					onChange={(e) => setTime(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextareaAutosize
					rowsmin={3}
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					style={{ width: '100%', marginTop: '16px' }}
					required
				/>
				<br />
				{loading ? (
					<Box
						sx={{
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100vh',
						}}
					>
						<CircularProgress />
						<Typography sx={{ marginTop: 2, textAlign: 'center' }}>
							Your data is being sent
						</Typography>
					</Box>
				) : (
					<>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={loading}
							style={{ margin: '16px 8px' }}
						>
							Submit
						</Button>
						<Button
							type="button"
							onClick={handleClear}
							variant="contained"
							color="secondary"
						>
							Clear
						</Button>
					</>
				)}
			</form>
		</Container>
	);
}
