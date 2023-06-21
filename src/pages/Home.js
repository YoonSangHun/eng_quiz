import '@picocss/pico/css/pico.min.css';
import NavBar from './NavBar';

const Home = () => {
  return (
    <main className="container">
      {/* 네비게이션 바 */}
    <NavBar />
    <hr />
      {/* 설명, 빠른시작 버튼 */}
      <header className="container">
        <hgroup>
          <h1>Master English</h1>
          <h2>
          Quiz를 푸는 형태의 '반복학습'을 통해 단어를 정확히 각인시켜 주는 WebService 입니다.
          </h2>
        </hgroup>
        <button onClick={e => console.log('onClick', e)}>How to Use</button>
        <button className="outline">Sign In</button>
      </ header>
    
    
    
    
    </main>
  );
}


export default Home;