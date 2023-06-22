import NavBar from "./NavBar";

const Quiz = () => {

    // 랜덤으로 단어 가져오는 로직


    return(
        <main className="container">
            <NavBar />
            <header>
                <br/>
                <h2>퀴즈 1</h2>
                <progress value="1" max="30"></progress>
            </header>
            <article id="article">
                <h2>Article</h2>
                <p>

                </p>
            </article>

            <label form="text">정답</label>
            <input type="text" id="text" name="text"/>
            <small>단어의 의미를 입력하고 Enter 를 누르세요</small>
        </main>
    )
}

export default Quiz;