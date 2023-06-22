import '@picocss/pico/css/pico.min.css';
import { Link } from 'react-router-dom/dist';


const NavBar = () => {
    return (
        
        <main className ="container">
            {/* 네비게이션 바 */}
            <nav>
                <ul>
                    {/*VM.m onClick 시 Home으로 Routing 해야함  */}
                <li>
                    <a href="./Home" onClick={e => console.log('onClick', e)}>
                    <strong style={{fontSize: '35px'}}><i>VM.m</i></strong></a>
                </li>
                </ul>
                <ul>
                    {/* switcher 각 버튼 클릭 시 해당 페이지로 Routing 해야 함 */}
                <li>
                    <details role="list" dir="rtl">
                    <summary aria-haspopup="listbox" role="link" className="secondary"
                        ><strong>Go to</strong></summary>
                    <ul role="listbox">
                        <Link to = "/SignIn"><li>Sign-In</li></Link>
                        <li><a href="./Login/">Log-in/Out</a></li>
                        <li><a href="./HowToUse">How to Use</a></li>
                        <li><a href="./Info/">My Info</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </nav>
        </ main>
        
    );
}

export default NavBar;