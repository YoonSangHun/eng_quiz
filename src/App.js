import '@picocss/pico/css/pico.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Info from './pages/Info';
import Login from './pages/Login';
import HowToUse from './pages/HowToUse';
import SignIn from './pages/SignIn';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Info" element={<Info />}></Route>
        <Route path="/HowToUse" element={<HowToUse />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        {/* <Route path="/HowToUse" element={<HowToUse />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
