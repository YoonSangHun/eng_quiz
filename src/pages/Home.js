import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';
import Quiz from './Quiz'
const Home = () => {
  return (
    <main className="container">
      {/* 네비게이션 바 */}
    <NavBar />
    <hr />
      {/* App 소개 */}
      <header className="container">
        <article id='article'>
          <hgroup>
            <h1>VM.m...?</h1>
            <h2>
            <strong>"VocaMaster-multiCampus"</strong> 는 Quiz를 활용한 영단어 학습을 도와주는 "WebService" 입니다. 
            </h2>
          </hgroup>
        </article>        
      </header>
      {/* button 1,2 */}
        <div className='grid'>
          <Link to="/HowToUse"> <button className="outline">HowToUse</button></Link>
          <Link to="/SignIn"> <button>Get Started</button></Link>
        </div>
    </main>
  );
}


export default Home;