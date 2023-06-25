import axios from "axios";
import {server} from "./apiServer";
import {useState} from "react";


const useGetAllVocasCount = () => {
    const [count, setCount] = useState(0);

    axios.get(`${server}/vocas/count`)
        .then(res => {
        // console.log(res);
        // console.log(JSON.parse(res.data.body));
        setCount(JSON.parse(res.data.body));

    }).catch(err => console.log(err))
    return count;
}
export default useGetAllVocasCount;