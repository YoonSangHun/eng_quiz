import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import useGetUsername from "../services/useGetUsername";

const SignIn = () => {
    const [text, setText] = useState("")
    const checkUsername = useGetUsername(text);

    const handleChange =(event) => {
        setText(event.target.value)
    }


    return(
        <dialog open>
            <article>
                <Link to="/"><a aria-label="Close" className="close"></a></Link>
                <hgroup>
                    <h1>Sign-In</h1>
                    <h2>For your Records</h2>
                </hgroup>

                <form>
                    <label htmlFor="text"><strong>Useranme</strong></label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Username"
                        aria-invalid={text == "" ? "none" : !checkUsername}
                        onChange={handleChange}
                    />
                    {
                        text == "" ? null :
                        text.length <= 3 ? <small>아이디는 3자리 이상이어야 합니다.</small> :
                        checkUsername ?
                            <small>사용 가능한 아이디 입니다.</small>:<small>이미 중복되는 아이디 입니다.</small>
                    }

                    <label htmlFor="text"><strong>Password</strong></label>
                    <input type="password" id="text" name=" text" placeholder=" Password"/>
                    <input type=" password" id=" text" name=" text" placeholder=" Confirm Password"/>

                    <label htmlFor=" text"><strong>Email</strong></label>
                    <input type=" email" id=" text" name=" text" placeholder=" Email"/>
                    <button type="submit" onClick="event.preventDefault()">Submit</button>
                </form>
            </article>
        </dialog>
    );
};

export default SignIn;