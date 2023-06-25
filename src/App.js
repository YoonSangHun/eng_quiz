import '@picocss/pico/css/pico.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Info from './pages/Info';
import Login from './pages/Login';
import HowToUse from './pages/HowToUse';
import SignIn from './pages/SignIn';
import Quiz from './pages/Quiz';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Info" element={<Info />}></Route>
          <Route path="/HowToUse" element={<HowToUse />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Quiz" element={<Quiz />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Step1" element={<Step1 />}></Route>
          <Route path="/Step2" element={<Step2 />}></Route>
          <Route path="/Step3" element={<Step3 />}></Route>
          {/* <Route path="/HowToUse" element={<HowToUse />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
