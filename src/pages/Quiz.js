import NavBar from "../component/NavBar";
import { useEffect, useState } from "react";
import QuziDetail from "../component/QuziDetail";
import axios from "axios";
import { server } from "../services/apiServer";
import useGetAllVocasCount from "../services/useGetAllVocasCount";
import { useNavigate } from "react-router-dom";


const Quiz = () => {
    /** 데이터베이스에 저장된 총 단어의 수 */
    const quiz_count = useGetAllVocasCount();

    const [quizNumber, setQuizNumber] = useState(0);
    const [quizList, setQuizList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    const [quizResult,setQuizResult] = useState([]);

    useEffect(() => {
        if (quiz_count === 0) {
            return;
        }
        // 데이터 로딩 시작
        setIsLoading(true);

        // 비동기로 퀴즈 데이터 가져오기
        const fetchQuizData = () => {
            axios.get(`${server}/vocas/quiz?quiz_count=${quiz_count}`).then(res => {
                setQuizList(JSON.parse(res.data.body));
                setIsLoading(false); // 데이터 로딩 완료
            }).catch(err => console.log(err))
        };

        fetchQuizData();
    }, [quiz_count]);

    // Next 버튼 클릭 시 quizNumbering을 1 올려주는 함수
    const handleNextClick = () => {
        console.log(JSON.stringify(quizResult))
        if((quizNumber+1) === quiz_count) {
            alert("축하드립니다. 모든 퀴즈를 푸셨습니다.")
            saveQuizResult();
            navigate("/");
        }
        setQuizNumber((prevNumbering) => prevNumbering + 1)
    };

    const addQuizResult = (word, result) => {
        setQuizResult([...quizResult, [word, result]]);
    }

    /**
     * DB에 퀴즈 결과를 저장하는 함수.
     **/
    const saveQuizResult = () => {
        // 디비에 quizResult 에 담긴 결과를 저장
        axios.post(`${server}/uservocabulary`, {
            "result": JSON.stringify(quizResult),
            "user_id": sessionStorage.getItem("user_id")
        }).then(res  =>{
            // 성공적으로 요청을 보낸 경우 처리
            console.log(res.data);
        }).catch(err => {
            // 오류 처리
            console.error(err);
        })
    }

    return (
        <main className="container">
            <NavBar></NavBar>
            <hr />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <QuziDetail handleNextClick={handleNextClick} addQuizResult={addQuizResult} data={quizList[quizNumber]} quizNumber={quizNumber} quiz_count={quiz_count} />
                </>
            )}
            {/* <label form="text">정답</label>
            <input type="text" id="text" name="text"/>
            <small>단어의 의미를 입력하고 Enter 를 누르세요</small> */}
        </main>
    );
};


export default Quiz;
