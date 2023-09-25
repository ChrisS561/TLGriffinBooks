import "./App.css";
import AppCoverpage from "./AppCoverpage";
import {
  RecoilRoot,
} from "recoil";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<AppCoverpage />} />
        <Route path="/About" element={<></>} />
        <Route path="/Books" element={<></>} />
        <Route path="/Events" element={<></>} />
        <Route path="/Contact" element={<></>} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
