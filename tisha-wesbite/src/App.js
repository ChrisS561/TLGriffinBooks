import AppCoverpage from './AppCoverpage';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from 'react-router-dom';
import WomansWorth from './Pages/WomansWorth';
import Events from './Pages/UpcomingEvents';
import About from './Pages/About';
import PreviewPage from './Pages/PreviewPage';
import SuccessPayment from './StripeFrontend/SuccessPayment';
import FailedPayment from './StripeFrontend/FailedPayment';
import SignIn from './Components/Login/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
//TODO implement a private Route
function App() {
	return (
		<RecoilRoot>
			<Routes>
				<Route path="/" element={<AppCoverpage />} />
				<Route path="/About" element={<About />} />
				<Route path="/Preview" element={<PreviewPage />} />
				<Route path="/Upcoming-Events" element={<Events />} />
				<Route path="/A-Womans-Worth" element={<WomansWorth />} />
				<Route path="/Success" element={<SuccessPayment />} />
				<Route path="/Failed" element={<FailedPayment />} />
				<Route path="/Signin" element={<SignIn />} />
				<Route path="/DashBoard" element={<Dashboard />} />
			</Routes>
		</RecoilRoot>
	);
}

export default App;
