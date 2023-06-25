import { Link } from 'react-router-dom/dist';
import NavBar from '../component/NavBar';
import { useState } from 'react';


const HowToUse = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    if (step === 1) {
      return (
        <>
          {/* 사용방법 예시  step 1*/}
          <article id='article'>
            <hgroup>
              <h2>STEP 1.</h2>
              <h2>
                먼저 <i>Sign-In</i> 하고 <i>Log-In</i>하세요. User를 구분하여 암기 진행도를 기록해주기 때문이에요 :)
              </h2>
            </hgroup>
          </article>
        </>
      )
    } else if (step === 2) {
      return (
        <>
          {/* 사용방법 예시  step 2*/}
          <article id='article'>
            <hgroup>
              <h2>STEP 2.</h2>
              <h2>
                아래 형태로 출제되는 Quiz를 진행하세요! 객관식 문항의 정답은 하나입니다.<br />
                Quiz 1회 당 20개의 Random문항이 출제되며, 동일 문항의 보기는 수시로 변경됩니다.
              </h2>
            </hgroup>
          </article>
          {/* 퀴즈 예시화면 */}
          <article id='article'>
            <header>
              <br />
              <h2>Quiz. 7</h2>
              <progress value="1" max="30"></progress>
            </header>
          </article>
          <article id="article">
            <h2>Apple</h2>
            <div>
              <input
                type="radio"
                id="radio-1"
                name="radio"
                value="radio-1"
              /> (글로 된)기사
              <br /><br />
              <input
                type="radio"
                id="radio-2"
                name="radio"
                value="radio-2"
              /> 소주제
              <br /><br />
              <input
                type="radio"
                id="radio-2"
                name="radio"
                value="radio-2"
                checked
              /> 사과
              <br /><br />
              <input
                type="radio"
                id="radio-2"
                name="radio"
                value="radio-2"
              /> 당근
            </div>
            <footer><i>예시 문항입니다.</i></footer>
          </article>
        </>
      )
    } else if (step === 3) {
      return (
        <>
          {/* 사용방법 예시  step 3*/}
          < article id='article' >

            <hgroup>
              <h2>STEP 3.</h2>
              <h2>
                Quiz를 완료하고, "Go to"에서 "My Info"를 선택하여 본인의 암기 진행도를 확인합니다.<br />
                부족한 단어를 찾아 계속 공부해 보세요.
              </h2>
            </hgroup>
          </article >
          <Link to="/"> <button className="outline">홈으로 돌아가기</button></Link>
        </>
      )
    }
  }

  return (
    <main className="container">
      <NavBar />
      <hr />
      {/* Step 이동 버튼 */}
      <div className='grid'>
        <button onClick={() => { setStep(1) }} role='button' className='secondary'>Step1</button>
        <button onClick={() => { setStep(2) }} role='button' className='secondary'>Step2</button>
        <button onClick={() => { setStep(3) }} role='button' className='secondary'>Step3</button>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <hr />

      {renderStep()}

    </main>
  );
}


export default HowToUse;
