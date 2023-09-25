import React from 'react';
import Homepage from './Pages/Homepage';
import NavBar from './Components/Navigation/NavBar';
import AuthorBookDisplay from './Components/HomepageBookDisplay/AuthorBookDisplay';
import SubscribeButton from './Components/Buttons/SubscribeButton';

export default function AppCoverpage() {
	return (
		<div>
			<NavBar />
			<Homepage />
			<AuthorBookDisplay />
		</div>
	);
}
