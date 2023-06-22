import { Link } from 'react-router-dom/dist';
import NavBar from '../component/NavBar';
import Quiz from './Quiz';

const HowToUse = () => {
  return (
    <main class="container">
      <NavBar />


      <hr/>
      {/* 사용방법 예시  step 1*/}
      <header class="container" >
        <hgroup>
        <h2>STEP 1.</h2>
          <h2>
          먼저 Sign-In 하고 Log-In하세요. User를 구분하여 암기 진행도를 기록해주기 때문이에요 :)
          </h2>
        </hgroup>
      </header>
      <div className='grid'>
          <button role='button' className='secondary outline'>Previous</button>
          <button role='button' className='secondary'>Next</button>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <hr/>
      {/* 사용방법 예시  step 2*/}
      <header class="container" >
        <hgroup>
        <h2>STEP 2.</h2>
          <h2>
          아래 형태로 출제되는 Quiz를 진행하세요! 객관식 문항의 정답은 하나입니다.<br/>
          Quiz 1회 당 20개의 Random문항이 출제되며, 동일 문항의 보기는 수시로 변경됩니다.
          </h2>
        </hgroup>
      </header>
      {/* 퀴즈 예시화면 */}
        <article id='article'>
        <header>
                <br/>
                {/* 퀴즈 넘버링? */}
                <h2>Quiz. ?</h2>
                <progress value="1" max="30"></progress>
            </header>
            {/* 문제 제목 */}
            <article id="article">
                <h2>Apple</h2>
                <div>
                    {/*답안 추출 로직, 단답형 */}
                    <input
                      type="radio"
                      id="radio-1"
                      name="radio"
                      value="radio-1"                      
                    /> (글로 된)기사
                    <br/><br/>
                    <input 
                        type="radio" 
                        id="radio-2" 
                        name="radio" 
                        value="radio-2"
                    /> 소주제
                    <br/><br/>
                    <input 
                        type="radio" 
                        id="radio-2" 
                        name="radio" 
                        value="radio-2"
                        checked
                    /> 사과
                    <br/><br/>
                    <input 
                        type="radio" 
                        id="radio-2" 
                        name="radio" 
                        value="radio-2"
                    /> 당근
                    
                </div>
            </article>
        </article>
        <div className='grid'>
          <button role='button' className='secondary outline'>Previous</button>
          <button role='button' className='secondary'>Next</button>
          <div></div>
          <div></div>
          <div></div>
        </div>
      <hr />
    {/* 사용방법 예시  step 3*/}
      <header class="container" >
          <hgroup>
          <h2>STEP 3.</h2>
            <h2>
            Quiz를 완료하고, "Go to"에서 "My Info"를 선택하여 본인의 암기 진행도를 확인하고 부족한 공부를 계속하세요 :)
            </h2>
          </hgroup>
        </header>
        <div className='grid'>
            <button role='button' className='secondary outline'>Previous</button>
            <button role='button' className='secondary'>Next</button>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </main>
  );
}


export default HowToUse;