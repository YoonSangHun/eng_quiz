import '@picocss/pico/css/pico.min.css';

const HowToUse = () => {
  return (
    <main class="container">      
      {/* 사용방법 예시 */}
      <header class="container" >
        <hgroup>
        <h2>How to Use...?</h2>
          <h2>
          회원가입 후 로그인하세요. Quiz를 통해 단어를 암기하세요! 아래의 예시를 통해 방식을 이해하세요.
          </h2>
        </hgroup>
      </header>
      <hr/>
      {/* 퀴즈 예시화면 */}
      <header class="container">
        <section id="progress">
          <h2>Quiz 1</h2>
          <progress id="progress-1" value="25" max="100"></progress>
        </section>
        
        <article id="article">
          <h2>Apple</h2>
            <input
                type="text"
                name="Answer"
                placeholder="Your Answer"
                aria-label="Your Answer"
                required
            />
        </article>
      </header>
    
    </main>
  );
}


export default HowToUse;