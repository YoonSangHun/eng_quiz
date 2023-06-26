import {useEffect, useState} from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import {server} from "../services/apiServer";

const Info = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [search,setSearch] = useState("");
  const [resultData, setResultData] = useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    // 데이터 로딩 시작
    setIsLoading(true);
    // 비동기로 퀴즈 데이터 가져오기
    const fetchQuizData = () => {
      axios.get(`${server}/uservocabulary?user_id=${sessionStorage.getItem('user_id')}`)
          .then(res => {
            console.log(JSON.parse(res.data.body));
            setResultData(JSON.parse(res.data.body))
            setIsLoading(false); // 데이터 로딩 완료
      }).catch(err => console.log(err))
    };
    fetchQuizData();
  }, []);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  // 검색 기능 구현
  useEffect(() => {
      let arr = resultData.filter(data => data.word.includes(search));
      setShowData(arr);
  }, [search]);

  return (
    <main className="container">
      <NavBar></NavBar>
      <hr />
      {/* Header */}
      <header className="container">

        <article id='article'>
          <hgroup>
            <h2>My Info (Records)</h2> <br />
            <h2>
              <strong><i>단어 암기의 진행도</i></strong>를 확인하는 페이지입니다.
              <br /> 1.Search를 통해 원하는 단어로 포커싱합니다.
              <br /> 2.단어를 클릭하면 암기 진행도를 확인할 수 있습니다.
            </h2>
          </hgroup>
        </article>
      </ header>

      {/* 진행도 표시창이 article 내에 생성 */}
      <article id="article">
        <label><strong><i>{sessionStorage.getItem('username')}</i></strong> 님의 단어별 학습도 현황입니다.</label><br /><hr />

        {/* Search */}
        <label htmlFor="search"><strong>Search</strong></label>
        <input type="search" id="search" name="search" placeholder="Search" onChange={handleChangeSearch} />
        <hr /> <br />

        {isLoading ? (
            <p>Loading...</p>
        ) : (
            search === "" ?
            <>
              {resultData.map((data) => (
                  <details>
                    <summary className="grid">
                      <strong><mark>{data.word}</mark></strong>
                      <i style={{fontSize:"15px"}}>{data.mean}</i>
                      <progress id="progress-1" value={data.per} max="100" />
                    </summary>
                    <footer>
                      <i>{data.source}</i>
                    </footer>
                  </details>
                ))}
            </>
            :
            <>
                {showData.map((data) => (
                    <details>
                        <summary className="grid">
                            <strong><mark>{data.word}</mark></strong>
                            <i style={{fontSize:"15px"}}>{data.mean}</i>
                            <progress id="progress-1" value={data.per} max="100" />
                        </summary>
                        <footer>
                            <i>{data.source}</i>
                        </footer>
                    </details>
                ))}
            </>
        )}
      </article>
    </main>
  );
}
export default Info;