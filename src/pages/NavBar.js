import '@picocss/pico/css/pico.min.css';


const NavBar = () => {
    return (
        
        <main className ="container">
            {/* 네비게이션 바 */}
            <nav>
                <ul>
                <li>
                    <a href="./Home" onClick={e => console.log('onClick', e)}>
                    <strong>VM.m</strong></a>
                </li>
                </ul>
                <ul>
                <li>
                    <details role="list" dir="rtl">
                    <summary aria-haspopup="listbox" role="link" className="secondary"
                        ><strong>Go to</strong></summary>
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
        
    );
}

export default NavBar;