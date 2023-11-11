import React from 'react';
import Homepage from './Components/Homepage/AuthorBio';
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer';
import HomepageEvents from './Components/Homepage/EventsHomepage';
import AuthorBookDisplay from './Components/Homepage/HomepageBookSummary';
import Landingpage from './Components/Homepage/Landingpage';

export default function AppCoverpage() {
	return (
		<div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
			<NavBar />
			<Landingpage />
			<Homepage />
			<AuthorBookDisplay />
			<HomepageEvents />
			<Footer />
		</div>
	);
}
