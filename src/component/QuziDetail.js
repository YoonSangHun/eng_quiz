import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuziDetail = ({ data, quizNumber, handleNextClick, quiz_count }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor]  = useState(null);
    const [checkedValue, setCheckedValue] = useState(null);
    const arr = [data.mean, data.q1, data.q2, data.q3];

  
    const checkAnswer = (e) => {
        setCheckedValue(e.target.value);
    }   

    const goNext = () => {
        // 이걸 누르면
        handleNextClick();
        setCheckedValue(null) // isAnswer 를 null로 초기화
        setColor(null)
    }

    const 색깔을바꾸는함수 = () => {
        setColor(checkedValue === data.mean ? "blue" : "red");
    }
    
    const 나가기모달열기 = () => {
        setIsOpen(true)
    }
    const 닫기 = () => {
        setIsOpen(false)
    }
    const 진짜나가기 = () => {
        navigate("/")
    }

    return(
        <div>
        <dialog open={isOpen}>
            <article>
                <header>
                    경고
                </header>
                <p>
                    남은 퀴즈 데이터가 모두 유실됩니다. 정말 나가시겠습니까?
                </p>
            <footer>
                <a href="#" role="button" className="secondary" onClick={닫기}>닫기</a>
                <a href="#" role="button" onClick={진짜나가기}>나가기</a>
            </footer>
            </article>
        </dialog>

        <header>
            <br/>
            {/* 퀴즈 넘버링? */}
            <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between", marginBottom: "1rem"}}>
                <h2 style={{ margin: 0 }}>Quiz. {quizNumber + 1}</h2>
                <button onClick={나가기모달열기} style={{ width: "180px", margin: 0 }}>나가기</button>
            </div>
            <progress value={quizNumber + 1} max={quiz_count}></progress>
        </header>
        
        {/* 문제 제목 */}
        <article id="article">
            <h2 style={{ color: color }}>{data.word}</h2>
            <div>
                {/*답안 추출 로직, 단답형 */}
                <input
                    type="radio"
                    id="radio-1"
                    name="radio"
                    value={arr[0]}
                    onChange={checkAnswer}
                    checked={arr[0] === checkedValue}
                />
                <label htmlFor="radio-1">{arr[0]}</label>
                <br/><br/>
                <input
                    type="radio"
                    id="radio-2"
                    name="radio"
                    value={arr[1]}
                    onChange={checkAnswer}
                    checked={arr[1] === checkedValue}
                /> 
                <label htmlFor="radio-2">{arr[1]}</label>
                <br/><br/>
                <input
                    type="radio"
                    id="radio-3"
                    name="radio"
                    value={arr[2]}
                    onChange={checkAnswer}
                    checked={arr[2] === checkedValue}
                /> 
                <label htmlFor="radio-3">{arr[2]}</label>
                <br/><br/>
                <input
                    type="radio"
                    id="radio-4"
                    name="radio"
                    value={arr[3]}
                    onChange={checkAnswer}
                    checked={arr[3] === checkedValue}
                />
                <label htmlFor="radio-4">{arr[3]}</label>
                
            </div>
        </article>
            <div className="grid">
                <button onClick={색깔을바꾸는함수}>
                    <strong></strong> Checked Answer
                </button>
                <button className="outline" onClick={goNext} disabled={!checkedValue}>
                    <strong>Next →</strong>
                </button>
            </div>
        </div>
    );
};

export default QuziDetail;