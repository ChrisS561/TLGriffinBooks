import "./App.css";
import AppCoverpage from "./AppCoverpage";
import {
  RecoilRoot,
} from "recoil";
import { Routes, Route } from "react-router-dom";
import WomansWorth from "./Pages/WomansWorth";
import Events from "./Pages/Events";
import About from "./Pages/About";
import PreviewPage from "./Pages/PreviewPage";

function App() {
  return (
		<RecoilRoot>
			<Routes>
				<Route path="/" element={<AppCoverpage />} />
				<Route path="/About" element={<About/>} />
				<Route path="/Preview" element={<PreviewPage/>} />
				<Route path="/Events" element={<Events/>} />
				<Route path="/A-Womans-Worth" element={<WomansWorth/>} />
			</Routes>
		</RecoilRoot>
	);
}

export default App;
