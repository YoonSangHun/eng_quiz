import { Link } from 'react-router-dom/dist';
import {useEffect, useState} from "react";
import jwt_decode from 'jwt-decode';
import {useNavigate} from "react-router-dom";


const NavBar = ({ isLoggedIn, onLogout }) => {
    const [jwtToken,setJwtTooken] = useState(sessionStorage.getItem("JWT_TOKEN"))
    const [loginUser, serLoginUser] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (jwtToken) {
            const decodedToken = jwt_decode(jwtToken);
            console.log(decodedToken['username']);
            serLoginUser(decodedToken['username']);
        }
    }, [jwtToken]);

    const handleLogout = () =>{
        sessionStorage.clear()
        alert("로그아웃 되었습니다.")
        navigate("/");
    }

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
                        {jwtToken ? 
                            (<Link to = "/Info"><strong>[{loginUser}]</strong></Link>)
                            : (<Link to = "/Login"><strong>LogIn</strong></Link>)
                        }
                    </li>
                    
                    {/* switcher 각 버튼 클릭 시 해당 페이지로 Routing 해야 함 */}
                    <li>
                        <details role="list" dir="rtl">
                        <summary aria-haspopup="listbox" role="link" className="secondary">
                            <strong>Go to</strong>
                        </summary>
                        {jwtToken ?
                            <ul role="listbox">
                                <Link to = "/Info"><li>My Info</li></Link>
                                <Link to="/Login" onClick={handleLogout}>
                                    <li style={{ color: "#F05650" }}>Logout</li>
                                </Link>
                            </ul>
                            :
                            <ul role="listbox">
                                <Link to = "/SignIn"><li>Sign-In</li></Link>
                            </ul>
                        }
                        </details>
                    </li>
                </ul>
                </nav>
            </nav>
        </ main>
    );
}

export default NavBar;