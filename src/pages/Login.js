import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom/dist";
import axios from "axios";
import {server} from "../services/apiServer";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const navigate = useNavigate()

    const handleUsernameChange = (e) => { setUsername(e.target.value); };
    const handlePasswordChange = (e) => { setPassword(e.target.value); };

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`${server}/login`, {
            username: username,
            password: password,
        }).then(res => {
            console.log(res)
            if (res.data.statusCode === 200) {
                sessionStorage.setItem("JWT_TOKEN", res.data.token);
                sessionStorage.setItem("user_id", res.data.user_id);
                sessionStorage.setItem("username",username);
                navigate("/");
            } else {
                sessionStorage.clear();
                setIsInvalid(true);
            }
        }).catch(err => console.log(err))
    };

    return(
        <dialog open>
            <article>
                <Link to="/"><div aria-label="Close" className="close"></div></Link>
                    <hgroup>
                    <h1>Please Login</h1>
                    <h2>For Use It</h2>
                </hgroup>
                <form>
                    <input
                        type="text"
                        name="login"
                        placeholder="ID"
                        aria-label="Login"
                        autoComplete="nickname"
                        required
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        aria-label="Password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className='grid'>
                        <button type="submit" onClick={handleLoginFormSubmit}>Login</button>
                        <Link to='/SignIn'><button className='primary outline'>Create ID first</button></Link>
                    </div>
                    { isInvalid === true ? <small style={{color: "#F05650"}} >아이디와 패스워드가 틀렸습니다.</small> : null }
                </form>
            </article>
        </dialog>
    );
;}

export default Login;

