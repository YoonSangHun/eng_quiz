import '@picocss/pico/css/pico.min.css';


const Login = () => {
    return(
        <dialog open>
            <article>
            <a href="#close" aria-label="Close" className="close"></a>
                    <hgroup>
                    <h1>Please Login</h1>
                    <h2>For Use It</h2>
                </hgroup>
                <form>
                    <input
                        type="text"
                        name="login"
                        placeholder="Id"
                        aria-label="Login"
                        autoComplete="nickname"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        aria-label="Password"
                        autoComplete="current-password"
                        required
                    />
                    <fieldset>
                        {/*<label htmlFor="remember">*/}
                        {/*    <input type="checkbox" role="switch" id="remember" name="remember"/>*/}
                        {/*    Remember me*/}
                        {/*</label>*/}
                    </fieldset>
                    <button type="submit" onClick="event.preventDefault()">Login</button>
                </form>
            </article>
        </dialog>
    );
;}

export default Login;