function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const QuziDetail = ({ data, quizNumber }) => {
    // probs.data == { q1: '', q2: '' }
    const arr = [data.mean, data.q1, data.q2, data.q3];
  
    shuffleArray(arr);

    return(
        <div>
        <header>
            <br/>
            {/* 퀴즈 넘버링? */}
            <h2>Quiz. {quizNumber + 1}</h2>
            <progress value="1" max="30"></progress>
        </header>
        {/* 문제 제목 */}
        <article id="article">
            <h2>{data.word}</h2>
            <div>
                {/*답안 추출 로직, 단답형 */}
                <input
                    type="radio"
                    id="radio-1"
                    name="radio"
                    value="radio-1"
                /> {arr[0]}
                <br/><br/>
                <input
                    type="radio"
                    id="radio-2"
                    name="radio"
                    value="radio-2"
                /> {arr[1]}
                <br/><br/>
                <input
                    type="radio"
                    id="radio-2"
                    name="radio"
                    value="radio-2"
                /> {arr[2]}
                <br/><br/>
                <input
                    type="radio"
                    id="radio-2"
                    name="radio"
                    value="radio-2"
                /> {arr[3]}

            </div>
        </article>
        </div>
    );
};

export default QuziDetail;