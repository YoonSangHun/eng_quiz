import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Step3 = () => {
    return (
      <main className="container">
      <NavBar />
      <hr/>
      {/* 사용방법 예시  step 3*/}
      <article id='article'>
        
            <hgroup>
            <h2>STEP 3.</h2>
              <h2>
              Quiz를 완료하고, "Go to"에서 "My Info"를 선택하여 본인의 암기 진행도를 확인합니다.<br/>
              부족한 단어를 찾아 계속 공부해 보세요 :)
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
      </main>
    );
  }
  
  
  export default Step3;