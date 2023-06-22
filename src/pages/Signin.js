
const SignIn = () => {
    return(
        <dialog open>
            
            <article>
                <a href="#close" aria-label="Close" className="close"></a>
                <hgroup>
                    <h1>Sign-In</h1>
                    <h2>For your Records</h2>
                </hgroup>

                <form>
                    <label htmlFor="text"><strong>Useranme</strong></label>
                    <input type="text" id="text" name="text" placeholder="Username"/>

                    <label htmlFor="text"><strong>Password</strong></label>
                    <input type="password" id="text" name=" text" placeholder=" Password"/>
                    <input type=" password" id=" text" name=" text" placeholder=" Confirm Password"/>

                    <label htmlFor=" text"><strong>Email</strong></label>
                    <input type=" email" id=" text" name=" text" placeholder=" Email"/>
                    <button type="submit" onClick="event.preventDefault()">Submit</button>
                </form>

                {/* <label htmlFor="valid">Username
                    <input
                        type="text"
                        id="valid"
                        name="valid"
                        placeholder="park"
                        aria-invalid="false"
                    />
                </label>

                <label htmlFor="invalid">
                    Username
                    <input
                        type="text"
                        id="invalid"
                        name="invalid"
                        placeholder="park"
                        aria-invalid="true"
                    />
                    <small>이미 중복되는 아이디 입니다.</small>
                </label> */}
            </article>
        </dialog>

    );
};

export default SignIn;