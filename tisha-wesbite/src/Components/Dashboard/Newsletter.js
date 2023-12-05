import React, { useState } from 'react';
import { Container, TextField, Button, TextareaAutosize, Typography,List,ListItem } from '@mui/material';

export default function Newsletter() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your logic to handle form submission here
		console.log('Form submitted:', name, email, subject, message);
	};

	const handleClear = () => {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

	return (
		<Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
			<Typography variant="h2" color="initial">
				Your Subscribers Are Waiting!
			</Typography>
			<Typography variant="subtitle2" color="initial" ml={2}>
				<List sx={{ listStyleType: 'disc' }}>
					<ListItem sx={{ display: 'list-item' }}>
						Name: The name you want your subscribers to see or leave it blank.
					</ListItem>
					<ListItem sx={{ display: 'list-item' }}>
						Email: The email you want to use to send to the subscribers.
						(Required*)
					</ListItem>
					<ListItem sx={{ display: 'list-item' }}>
						Subject: The subject of your newsletter. (Required*)
					</ListItem>
					<ListItem sx={{ display: 'list-item' }}>
						Message: The message of your newsletter. (Required*)
					</ListItem>
				</List>
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Subject"
					type="text"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					fullWidth
					margin="normal"
					required
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
				<Button
					type="submit"
					variant="contained"
					color="primary"
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
			</form>
		</Container>
	);
}
