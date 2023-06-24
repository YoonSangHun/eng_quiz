import '@picocss/pico/css/pico.min.css';
import { Link } from 'react-router-dom/dist';


const NavBar = ({ isLoggedIn, onLogout }) => {
    return (
        <main className ="container">
            {/* 네비게이션 바 */}
            <nav>
                <ul>
                    {/*VM.m onClick 시 Home으로 Routing 해야함  */}
                    <Link to = "/"><strong style={{fontSize: '35px'}}><i>VM.m</i></strong></Link>

                </ul>
                <nav className='container fluid'>
                <ul/>               
                <ul>
                    {/* Login 중이면 LogOut만 표기, 비회원이면 Sign-In 페이지 렌더링 */}
                    <li>
                        {isLoggedIn ? 
                            (<Link to = "/Login" onClick={onLogout}><strong>LogOut</strong></Link>)
                            : (<Link to = "/Login"><strong>LogIn</strong></Link>)
                        }
                    </li>
                    
                    {/* switcher 각 버튼 클릭 시 해당 페이지로 Routing 해야 함 */}
                    <li>
                        <details role="list" dir="rtl">
                        <summary aria-haspopup="listbox" role="link" className="secondary">
                            <strong>Go to</strong>
                        </summary>
                        <ul role="listbox">
                            <Link to = "/SignIn"><li>Sign-In</li></Link>
                            <Link to = "/HowToUse"><li>How to Use</li></Link>
                            <Link to = "/Info"><li>My Info</li></Link>
                        </ul>
                        </details>
                    </li>
                </ul>
                </nav>
            </nav>
        </ main>
    );
}

export default NavBar;