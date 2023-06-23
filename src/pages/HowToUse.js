import { Link } from 'react-router-dom/dist';
import NavBar from '../component/NavBar';
import Step1 from '../component/Step1';


const HowToUse = () => {
  return (
    <main className="container">
      <NavBar />
      <hr/>
      <article id='article'>
        <Step1 /> <br />
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


export default HowToUse;
