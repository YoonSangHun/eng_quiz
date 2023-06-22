import NavBar from "../component/NavBar";

const Info = () => {
    return (
      <main className="container">
        {/* 네비게이션 바 */}
        <NavBar />
        <hr />
          {/* Header */}
          <header className="container">
            
              <article id = 'article'>
                <hgroup>
                  <h1>My Info (Records)</h1> <br/>
                  <h2><strong><i>단어 암기의 진행도</i></strong>를 확인하는 페이지입니다.
                    <br/> 1.Search를 통해 원하는 단어로 포커싱합니다. 
                    <br/> 2.단어를 클릭하면 암기 진행도를 확인할 수 있습니다.
                  </h2>
                </hgroup>
              </article>
            <hr/>
          </ header>

          {/* 진행도 표시창이 article 내에 생성 */}
          <article id="article">
            {/* Search */}
            <label for="search"><strong>Search</strong></label>
                <input type="search" id="search" name="search" placeholder="Search" />
            <hr/> <br/>

            {/* Accordions 클릭 시 아래에 진행도 display 
            진행률 = progress, ""은 암기율 ""% 단어입니다.*/}
            <details>
                <summary><mark><strong>Article</strong></mark>: (글)기사, 본문</summary>
                    <p>"Article"은 암기율 10% 단어입니다.
                        <br/><br/>
                        <progress id="progress-1" value="10" max="100">
                        </progress>
                        {/* 총 n회 출제, 정답 n회, 오답 n회  암기율은  (n/100 * 100)%입니다.*/}
                        <footer>
                            <i>총 10회 출제, 정답 1회, 오답 0회</i>
                        </footer>

                    </p>
            </details>
          </article>
      
      
      </main>
      
    );
  }
  
  
  export default Info;