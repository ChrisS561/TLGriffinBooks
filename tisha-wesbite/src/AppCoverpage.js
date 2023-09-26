import React from 'react';
import Homepage from './Pages/Homepage';
import NavBar from './Components/Navigation/NavBar';
import AuthorBookDisplay from './Components/HomepageBookDisplay/AuthorBookSummary';
import Footer from './Components/Footer/Footer';

export default function AppCoverpage() {
	return (
		<div>
			<NavBar />
			<Homepage />
			<AuthorBookDisplay />
			<Footer/>
		</div>
	);
}
