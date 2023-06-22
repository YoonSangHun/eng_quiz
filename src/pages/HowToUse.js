import NavBar from '../component/NavBar';

const HowToUse = () => {
  return (
    <main class="container">
      <NavBar />
      <hr/>
      {/* 사용방법 예시 */}
      <header class="container" >
        <hgroup>
        <h2>STEP 1.</h2>
          <h2>
          Sign-In 하고 Log-In하세요.
          </h2>
        </hgroup>
      </header>
      <br/>
      <br/>
      <hr/>
      <header class="container" >
        <hgroup>
        <h2>STEP 2.</h2>
          <h2>
          아래 형태로 출제되는 Quiz를 진행하세요!
          </h2>
        </hgroup>
      </header>
      {/* 퀴즈 예시화면 */}
        <section id="progress">
          <h3>Quiz 1</h3>
          <progress id="progress-1" value="10" max="100"></progress>
        </section>
        
        <article id="article">
          <h2>Apple</h2>
            <input
                type="text"
                name="Answer"
                placeholder="Your Answer in Korean"
                aria-label="Your Answer"
                required
            />
            <footer>
                단어의 뜻은 한 가지가 아니죠. 아는대로 적어보세요.
            </footer>
        </article>
    
    
    </main>
  );
}


export default HowToUse;