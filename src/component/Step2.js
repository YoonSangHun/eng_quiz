import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Step2 = () => {
    return (

        <main className="container">
        <NavBar />
        <hr/>
        <article id='article'>
            {/* 사용방법 예시  step 2*/}
        
            <hgroup>
                <h2>STEP 2.</h2>
                <h2>
                아래 형태로 출제되는 Quiz를 진행하세요! 객관식 문항의 정답은 하나입니다.<br/>
                Quiz 1회 당 20개의 Random문항이 출제되며, 동일 문항의 보기는 수시로 변경됩니다.
                </h2>
            </hgroup>
        
        </article>
        {/* Step 이동 버튼 */}
        <div className='grid'>
        <Link to='/HowToUse'><button role='button' className='secondary'>Step1</button></Link>
        <Link to='/Step2'><button role='button' className='secondary'>Step2</button></Link>
        <Link to='/Step3'><button role='button' className='secondary'>Step3</button></Link>
        <div></div>
        <div></div>
        <div></div>
        </div>
        <hr/>
        {/* 퀴즈 예시화면 */}
        <article id='article'>
          <header>
                  <br/>
                  {/* 퀴즈 넘버링? */}
                  <h2>Quiz. 7</h2>
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
              <footer><i>예시 문항입니다.</i></footer>
          </article>

      </main>
    );
  }
  
  
  export default Step2;