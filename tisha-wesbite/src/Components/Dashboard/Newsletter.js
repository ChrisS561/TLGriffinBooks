import React, { useState } from 'react';
import { Container, TextField, Button, TextareaAutosize, Typography } from '@mui/material';

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
				/>
				<TextField
					label="Subject"
					type="text"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextareaAutosize
					rowsmin={3}
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					style={{ width: '100%', marginTop: '16px' }}
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
