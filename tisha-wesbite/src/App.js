import "./App.css";
import AppCoverpage from "./AppCoverpage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<AppCoverpage />} />
          <Route path="/About" element={<></>} />
          <Route path="/Books" element={<></>} />
          <Route path="/Events" element={<></>} />
          <Route path="/Contact" element={<></>} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
