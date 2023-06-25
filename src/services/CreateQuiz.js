// Quiz id를 받아 문제를 생성하는 함수

import axios from "axios";
import { server } from "./apiServer";

const CreateQuiz = (quiz_count) => {

    // vocas 테이블의 모든 단어의 갯수를 가져옴

    axios.get(`${server}/vocas/quiz?quiz_count=${quiz_count}`).then(res => {
        console.log(JSON.parse(res.data.body))
        
        return JSON.parse(res.data.body)

    }).catch(err => console.log(err))
    
}

export default CreateQuiz;