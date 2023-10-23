import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			sx={{
				display: 'inherit',
				fontFamily: 'inter',
				color: '#72320A',
				margin: '1rem',
			}}
			onClick={() => loginWithRedirect()}
		>
			Sign in
		</Button>
	);
};

export default LoginButton;
