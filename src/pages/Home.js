import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isUser,setIsUser] = useState()
  const navigate = useNavigate()

  const handleGetStart = () => {
    if(sessionStorage.getItem("username")){
      navigate("/Quiz");
    }else{
      navigate("/Login");
    }
  }

  return (
    <main className="container">
      <NavBar></NavBar>
    <hr />
      {/* App 소개 */}
      <header className="container">
        <article id='article'>
          <hgroup>
            <h1>VM.m...?</h1>
            <h2>
            <strong><i>"VocaMaster-multiCampus"</i></strong> 는 Quiz를 활용한 영단어 학습을 도와주는 "WebService" 입니다. 
            </h2>
          </hgroup>
        </article>        
      </header>
      {/* button 1,2 */}
        <div className='grid'>
          <Link to="/HowToUse"> <button className="outline">How To Use ?</button></Link>

          <button onClick={handleGetStart}>Get Started</button>

        </div>
    </main>
  );
}


export default Home;