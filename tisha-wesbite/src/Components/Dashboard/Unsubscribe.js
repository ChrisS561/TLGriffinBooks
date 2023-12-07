import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
	deleteDoc,
	collection,
	query,
	where,
	getDocs,
} from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';

export default function UnsubscribeForm() {
	const [email, setEmail] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [message, setMessage] = useState('');

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			setIsSubmitted(false);
			setMessage('Please enter a valid email address.');
			return;
		}
        const lowercaseEmail = email.toLowerCase(); 
		const usersRef = collection(db, 'users');

		try {
			const q = query(usersRef, where('email', '==', lowercaseEmail));
			const querySnapshot = await getDocs(q);

			if (querySnapshot.size === 0) {
				setMessage('No user found with the provided email.');
				return;
			}

			const doc = querySnapshot.docs[0];

			console.log(doc.id, ' => ', doc.data());

			await deleteDoc(doc.ref);
			setIsSubmitted(true);
            setMessage("")
		} catch (error) {
			setMessage('Error handling the submission: ' + error.message);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: '#72320A' }}>
					<UnsubscribeIcon />
				</Avatar>
				<Typography component="h1" variant="h5" textAlign="center">
					Sorry to see you leave. Please enter your email to unsubscribe.
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						error={isSubmitted && !validateEmail(email)}
						helperText={isSubmitted && !validateEmail(email) && message}
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
						Unsubscribe
					</Button>
					{isSubmitted && (
						<Typography variant="body2" color="success" sx={{ mt: 2 }}>
							Thank you. You have been unsubscribed.
						</Typography>
					)}
					{message && (
						<Typography variant="body2" color="error" sx={{ mt: 2 }}>
							{message}
						</Typography>
					)}
				</Box>
			</Box>
		</Container>
	);
}
