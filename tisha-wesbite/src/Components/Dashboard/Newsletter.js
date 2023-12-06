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
import PreviewEmail from './PreviewEmail';

export default function Newsletter() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const PostData = async () => {
		setLoading(true);
		axios
			.post(
				process.env.REACT_APP_SERVER_API,
				{
					name,
					email,
					subject,
					message,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((response) => {
				console.log(response.data);
				handleClear();
			})
			.catch((error) => {
				console.error(`Post error: ${error.message}`);
			})
			.finally(() => setLoading(false));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Form submitted:', name, email, subject, message);
		await PostData();
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
						<strong>Name:</strong> The name or header you want your subscribers
						to see, or leave it blank. <br />
						(e.g., "Dear Subscribers","Hello Readers")
					</ListItem>
					<ListItem sx={{ display: 'list-item' }}>
						<strong>Email:</strong> Your email you want to use to send to the
						subscribers. (Required*)
					</ListItem>
					<ListItem sx={{ display: 'list-item' }}>
						<strong>Subject:</strong>The subject of your newsletter. (Required*)
					</ListItem>
					<ListItem sx={{ display: 'list-item' }}>
						<strong>Message:</strong> The message of your newsletter.
						(Required*)
					</ListItem>
				</List>
				<Typography variant="subtitle2" color="textSecondary" paragraph>
					Fill in the details below to send your newsletter. You can use HTML
					tags to style your message.
				</Typography>
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
					defaultValue="chirs"
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
							Your newsletter is being sent
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
			<Typography
				variant="h6"
				color="primary"
				style={{ margin: '40px 0 20px' }}
			>
				Preview of Your Newsletter
			</Typography>
			<PreviewEmail
				name={name}
				subject={subject}
				fromEmail={email}
				message={message}
			/>
		</Container>
	);
}
