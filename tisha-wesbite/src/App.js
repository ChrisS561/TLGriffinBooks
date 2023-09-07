import logo from './logo.svg';
import './App.css';
import AppCoverpage from './AppCoverpage';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<AppCoverpage />
		</RecoilRoot>
	);
}

export default App;
