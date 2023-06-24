import { useState, useEffect } from "react";
import axios from "axios";
import {server} from "./apiServer";

const useGetUsername = (username) => {
    const [ckUsername, setCkUsername] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if(username.length <= 3) return !ckUsername
            try {
                const response = await axios.get(`${server}/users?username=${username}`);
                setCkUsername(JSON.parse(response.data.body));
            } catch (error) {
                // API 호출에 실패한 경우에 대한 예외 처리를 여기에 작성하세요.
                console.error("Failed to fetch:", error);
            }
        };

        fetchData();
    }, [username]);

    return ckUsername;
};

export default useGetUsername;