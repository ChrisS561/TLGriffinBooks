import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import NavBar from './Components/Navigation/NavBar';
import AuthorBookDisplay from './Components/Homepage/HomepageBookSummary';
import Footer from './Components/Footer/Footer';
import HomepageEvents from './Components/EventsPage/HomepageEvents';

export default function AppCoverpage() {
	return (
		<div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
			<NavBar />
			<Homepage />
			<AuthorBookDisplay />
			<HomepageEvents />
			<Footer />
		</div>
	);
}
