import {useEffect} from "react";

const useCheckPassword = (password, rePassword) => {

    useEffect(() => {
        if (password === rePassword) {
            return true;
        }else {
            return false;
        }

    }, [password, rePassword]);
};

export default useCheckPassword;