import Button from "../../../../Components/Button/Button"
import RouteName from "../../../../Components/RouteName/RouteName"
import SideNav from "../../../../Components/SideNav/SideNav"
import styles from './PortfolioBoard.module.css'

const route = ['마이페이지','포트폴리오 관리','포트폴리오 게시판']
const sidenavCont = ['프로필 관리','포트폴리오 관리','개인정보 수정']

//mock data
const mockData = [
    {
        title : '코드컨벤션 논의',
        date: '2020-12-10'
    },
    {
        title : '역할 분담',
        date: '2021-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    },
    {
        title : '3주차의 기록',
        date: '2022-12-10'
    }
]

const PortfolioBoard= ()=>{
    return(
        <div className={styles.PortfolioBoard}>
            <RouteName route={route}/>

            {/*사이드 네비게이터 + 포트폴리오 게시판*/}
            <div className={styles.PortfolioBoard__wrap}>
                {/*사이드 네비게이터 */}
                <SideNav content={sidenavCont}/>

                <div className={styles.PortfolioBoard__contentWrap}>
                    {/*포트폴리오명 */}
                    <div className={styles.PorfolioBoard__portfolioTitle}>
                        OPEN AI 활용 프로젝트
                    </div>

                    {/*포트폴리오 리스트 */}
                    <ul className={styles.PortfolioBoard__table}>

                        {/*행 제목 : 순번, 제목, 작성 일자 */}
                        <li>
                            <ul className={styles.PortfolioBoard__rowHeader}>
                                    <li className={styles.PortfolioBoard__headerCell}>순번</li>
                                    <li className={styles.PortfolioBoard__headerCell}> 제목</li>
                                    <li className={styles.PortfolioBoard__headerCell}>작성 일자</li>
                            </ul>
                        </li>

                        {/*포트폴리오 data 순회, li 로 출력*/}
                        {mockData.map((data,idx)=>(
                        <li key={idx} >
                            <ul className={styles.PortfolioBoard__list}>
                                <li className={styles.PortfolioBoard__cell}>{idx}</li>
                                <li className={styles.PortfolioBoard__cell}>{data.title}</li>
                                <li className={styles.PortfolioBoard__cell}>{data.date}</li>
                                <Button text='수정'  type='NONE__TEXT-MC2-16' />
                            </ul>
                        </li>
                        ))}
                    </ul>
                    
                    <div className={styles.PortfolioBoard__btnWrap}>
                        <Button text='AI포트폴리오' type='741EFF_150x40'/>
                        <Button text='글쓰기'/>
                    </div>

                </div>
            </div> 
        </div>
    )
}

export default PortfolioBoard