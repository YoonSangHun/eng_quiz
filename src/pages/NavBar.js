import '@picocss/pico/css/pico.min.css';


const NavBar = () => {
    return (
        <>
        <main className ="container">
            {/* 네비게이션 바 */}
            <nav className="container" >
                <ul>
                <li>
                    <a href="./" className="contrast" onClick="event.preventDefault()">
                    <strong>MasterEnglish</strong></a>
                </li>
                </ul>
                <ul>
                <li>
                    <details role="list" dir="rtl">
                    <summary aria-haspopup="listbox" role="link" className="secondary"
                        >Go to</summary>
                    <ul role="listbox">
                        <li><a href="./SignIn">Sign-In</a></li>
                        <li><a href="./Login/">Log-in/Out</a></li>
                        <li><a href="./HowToUse">How to Use</a></li>
                        <li><a href="./Info/">My Info</a></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </nav>
        </ main>
        </>
    );
}

export default NavBar;