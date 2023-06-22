import '@picocss/pico/css/pico.min.css';
import NavBar from './NavBar';
import Login from './Login';
import HowToUse from './HowToUse';
import SignIn from './SignIn';
import Quiz from './Quiz';


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
        <button className="outline" onClick={e => console.log('onClick', e)}>How to Use</button>
        <button onClick={e => console.log('onClick', e)}>Get Started</button>
      </ header>
    
    
    
      <Quiz/>
    </main>
    
  );
}


export default Home;