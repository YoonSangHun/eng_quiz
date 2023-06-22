import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';

const Home = () => {
  return (
    <main className="container">
      {/* 네비게이션 바 */}
    <NavBar />
    <hr />
      {/* 설명, 빠른시작 버튼 */}
      <header className="container">
        <hgroup>
          <h1>VM.m...?</h1>
          <h2>
          <strong>"VocaMaster-multiCampus"</strong> 는 Quiz를 활용한 영단어 학습을 도와주는 "WebService" 입니다. 
          </h2>
        </hgroup>
        <Link to="/HowToUse"> <button className="outline">HowToUse</button></Link>
        <Link to="/SignIn"> <button>Get Started</button></Link>
      </header>
    </main>
  );
}


export default Home;