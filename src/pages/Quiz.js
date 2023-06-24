import NavBar from "../component/NavBar";

const Quiz = () => {

    // 랜덤으로 단어 가져오는 로직


    return(
        <main className="container">
            
            <hr/>
            <header>
                <br/>
                {/* 퀴즈 넘버링? */}
                <h2>Quiz. 1</h2>
                <progress value="1" max="30"></progress>
            </header>
            {/* 문제 제목 */}
            <article id="article">
                <h2>Article</h2>
                <div>
                    {/*답안 추출 로직, 단답형 */}
                    <input
                      type="radio"
                      id="radio-1"
                      name="radio"
                      value="radio-1"
                      checked
                    /> (글로 된)기사
                    <br/><br/>
                    <input 
                        type="radio" 
                        id="radio-2" 
                        name="radio" 
                        value="radio-2"
                    /> 소주제
                    <br/><br/>
                    <input 
                        type="radio" 
                        id="radio-2" 
                        name="radio" 
                        value="radio-2"
                    /> 사과
                    <br/><br/>
                    <input 
                        type="radio" 
                        id="radio-2" 
                        name="radio" 
                        value="radio-2"
                    /> 당근
                    
                </div>
            </article>
            <div className="grid">
                <button className="outline"><strong>←</strong> Previous</button>
                <button>Next <strong>→</strong></button>
            </div>
            {/* <label form="text">정답</label>
            <input type="text" id="text" name="text"/>
            <small>단어의 의미를 입력하고 Enter 를 누르세요</small> */}
        </main>
    )
}

export default Quiz;