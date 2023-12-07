import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import validator from 'validator';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import axios from 'axios';

export default function SubmitButtonFormControl() {
	const [inputForm, setInputForm] = useState({
		firstname: '',
		lastname: '',
		email: '',
	});
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const handleInput = (event) => {
		const { name, value } = event.target;
		setInputForm({
			...inputForm,
			[name]: value,
		});
	};

	const PostData = async () => {
		const { firstname, email } = inputForm;
		axios
			.post(
				process.env.REACT_APP_SERVER_NEWSLETTER_WELCOME_API,
				{
					firstname,
					email,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(`Post error: ${error.message}`);
			});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const usersCollection = collection(db, 'users');
		const { firstname, lastname, email } = inputForm;

		if (!firstname || !lastname || !email) {
			setError(true);
			return;
		}

		const lowercaseEmail = email.toLowerCase();

		if (!validator.isEmail(email)) {
			alert('Please enter a valid email address.');
			return;
		}

		setError(false);

		try {
			const newDoc = await addDoc(usersCollection, {
				firstname,
				lastname,
				email: lowercaseEmail,
			});
			console.log(`Your doc was created at ${newDoc.id}`);

			setSuccess(true);
			await PostData();
		} catch (e) {
			console.error('Error adding document: ', e.message);
		}
	};

	return (
		<div>
			<Stack direction="column">
				<TextField
					required
					id="firstname"
					label="First Name"
					variant="standard"
					type="text"
					value={inputForm.firstname}
					name="firstname"
					onChange={handleInput}
					sx={{ width: '100vw', maxWidth: '15rem' }}
					error={error && !inputForm.firstname}
					helperText={
						error && !inputForm.firstname ? 'All fields are required' : ''
					}
				/>
				<TextField
					required
					id="lastname"
					type="text"
					label="Last Name"
					variant="standard"
					name="lastname"
					onChange={handleInput}
					value={inputForm.lastname}
					sx={{ width: '100vw', maxWidth: '15rem' }}
					error={error && !inputForm.lastname}
					helperText={
						error && !inputForm.lastname ? 'All fields are required' : ''
					}
				/>
				<TextField
					required
					id="email"
					label="Enter your email address"
					type="email"
					variant="standard"
					name="email"
					value={inputForm.email}
					onChange={handleInput}
					sx={{ width: '100vw', maxWidth: '15rem' }}
					error={error && !inputForm.email}
					helperText={
						error && !inputForm.email ? 'All fields are required' : ''
					}
				/>
				{success ? (
					<Button
						type="submit"
						variant="outlined"
						color="primary"
						onClick={handleSubmit}
						disabled={success}
						sx={{
							display: 'block',
							width: '100%',
							maxWidth: '10rem',
							fontFamily: 'inter, sans-serif',
							fontSize: '14px',
							letterSpacing: '1px',
							textAlign: 'center',
							marginTop: 1,
							backgroundColor: 'green',
							borderColor: 'green',
							'&:hover': {
								backgroundColor: 'darkgreen',
								borderColor: 'darkgreen',
							},
						}}
					>
						Submit
						<CheckCircleOutlineIcon sx={{ color: 'black' }} />
					</Button>
				) : (
					<Button
						type="submit"
						variant="contained"
						color="info"
						onClick={handleSubmit}
						disabled={success}
						sx={{
							transition:
								'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
							':hover': {
								boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
							},
							display: 'block',
							width: '100%',
							maxWidth: '10rem',
							fontFamily: 'inter',
							fontSize: '12px',
							letterSpacing: '3px',
							textAlign: 'center',
							marginTop: 1,
						}}
					>
						SUBSCRIBE
					</Button>
				)}
			</Stack>
		</div>
	);
}
