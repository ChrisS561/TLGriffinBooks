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
import Unsubscribe from './Components/Dashboard/Unsubscribe';

function App() {
	return (
		<RecoilRoot>
			<Routes>
				<Route path="/" element={<AppCoverpage />} />
				<Route path="/about" element={<About />} />
				<Route path="/preview" element={<PreviewPage />} />
				<Route path="/upcoming-events" element={<Events />} />
				<Route path="/a-womans-worth" element={<WomansWorth />} />
				<Route path="/success" element={<SuccessPayment />} />
				<Route path="/failed" element={<FailedPayment />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/unsubscribe" element={<Unsubscribe />} />
			</Routes>
		</RecoilRoot>
	);
}

export default App;
