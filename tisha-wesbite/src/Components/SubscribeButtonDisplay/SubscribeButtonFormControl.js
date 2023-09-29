import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function SubmitButtonFormControl() {
	const [inputForm, setInputForm] = useState({
		firstname: '',
		lastname: '',
		email: '',
	});
	const [error, setError] = useState(false);
	const handleInput = (event) => {
		const { name, value } = event.target;
		setInputForm({
			...inputForm,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setError(true);
		console.log(inputForm);
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
						error && !inputForm.firstname ? 'This field is required' : ''
					}
				/>
				<TextField
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
						error && !inputForm.lastname ? 'This field is required' : ''
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
					helperText={error && !inputForm.email ? 'This field is required' : ''}
				/>
				<Button
					type="submit"
					variant="contained"
					color="info"
					onClick={handleSubmit}
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
			</Stack>
		</div>
	);
}
