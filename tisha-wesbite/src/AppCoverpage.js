import React from 'react';
import Homepage from './Components/Homepage';
import NavBar from './Components/Navigation/NavBar';
import AuthorBookDisplay from './Components/HomepageBookDisplay/AuthorBookDisplay';

export default function AppCoverpage() {
	return (
		<div>
			<NavBar />
			<Homepage />
			<AuthorBookDisplay />
		</div>
	);
}
