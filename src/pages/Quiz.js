import NavBar from "../component/NavBar";
import { useEffect, useState } from "react";
import QuziDetail from "../component/QuziDetail";
import axios from "axios";
import { server } from "../services/apiServer";
import useGetAllVocasCount from "../services/useGetAllVocasCount";


const Quiz = () => {
    const quiz_count = useGetAllVocasCount();

    const [quizNumber, setQuizNumber] = useState(0);
    const [quizList, setQuizList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        setQuizNumber((prevNumbering) => prevNumbering + 1);
    };

    return (
        <main className="container">
            <NavBar></NavBar>
            <hr />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <QuziDetail handleNextClick={handleNextClick} data={quizList[quizNumber]} quizNumber={quizNumber} quiz_count={quiz_count} />
                </>
            )}
            {/* <label form="text">정답</label>
            <input type="text" id="text" name="text"/>
            <small>단어의 의미를 입력하고 Enter 를 누르세요</small> */}
        </main>
    );
};


export default Quiz;
