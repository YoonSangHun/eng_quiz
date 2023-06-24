import {Link} from "react-router-dom";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useGetUsername from "../services/useGetUsername";
import axios from "axios";
import {server} from "../services/apiServer";


const SignIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [email, setEmail] = useState("")

    const checkUsername = useGetUsername(username);

    const handleChangeUsername =(event) => { setUsername(event.target.value); }
    const handleChangePassword =(event) => { setPassword(event.target.value); }
    const handleChangeRePassword =(event) => { setRePassword(event.target.value); }
    const handleChangeEmail =(event) => { setEmail(event.target.value); }

    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const validateSignIn = () => {
        if(username.length <= 3) {
            setMessage("Username의 길이는 3자이 이상이어야 합니다. ")
            return false;
        }
        if(checkUsername){
            setMessage("이미 중복되는 아이디 입니다.")
            return false;
        }
        if(!(password === rePassword)){
            setMessage("패스워드가 일치하지 않습니다.")
            return false;
        }
        if(email.length <=3 && !email.includes('@') && !email.includes('.com')){
            setMessage("이메일 형식이 맞지 않습니다.")
            return false;
        }
        return true;
    }

    const handleSignInFormSubmit = (e) => {
        e.preventDefault();
        if(validateSignIn() === true){
            axios.post(`${server}/users`, {
                username: username,
                email: email,
                password: password,
            }).then(res => {
                console.log(res)
                if (res.data.statusCode === 200) {
                    navigate("/");
                    alert("회원가입 성공")
                } else if(res.data.statusCode === 409){
                    setMessage("회원가입 실패")
                }
            }).catch(err => console.log(err))
        }
    };

    return(
        <dialog open>
            <article>
                <Link to="/"><div aria-label="Close" className="close"></div></Link>
                <hgroup>
                    <h1>Sign-In</h1>
                    <h2>For your Records</h2>
                </hgroup>

                <form>
                    {/* Username */}
                    <label htmlFor="text"><strong>Useranme</strong></label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Username"
                        aria-invalid={username === "" ? "none" :
                            username.length <= 3 ? "true" :
                                !checkUsername ?
                                   "false":"true"
                        }
                        onChange={handleChangeUsername}
                    />
                    {
                        username == "" ? null :
                            username.length <= 3 ? <small>아이디는 3자리 이상이어야 합니다.</small> :
                                !checkUsername ?
                                    <small>사용 가능한 아이디 입니다.</small>:<small>이미 중복되는 아이디 입니다.</small>
                    }

                    {/* Password */}
                    <label htmlFor="text"><strong>Password</strong></label>
                    <input type="password" id="text" name="text" placeholder="Password" onChange={handleChangePassword} />
                    <input type="password" id="text" name="text" placeholder="Confirm Password" onChange={handleChangeRePassword}
                           aria-invalid={rePassword === "" ? "none" :
                        password === rePassword ? "false" : "true"}
                    />

                    {/* Email */}
                    <label htmlFor="text"><strong>Email</strong></label>
                    <input type="email" id="text" name="text" placeholder="Email" onChange={handleChangeEmail}/>

                    {/* Submit */}
                    <button type="submit" onClick={handleSignInFormSubmit}>Submit</button>
                    <small>{message}</small>
                </form>
            </article>
        </dialog>
    );
};

export default SignIn;