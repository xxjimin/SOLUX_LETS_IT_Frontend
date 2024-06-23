import ProjectBtn from '../../../Components/Project_Button/ProjectBtn'
import RouteName from '../../../Components/RouteName/RouteName'
import SideNav from '../../../Components/SideNav/SideNav'
import styles from './OngoingProj.module.css'

const route = ['내 프로젝트', '진행중인 프로젝트']
const sidenavCont = ['구인중인 프로젝트','진행중인 프로젝트','스크랩한 프로젝트']
const OngoingProj = ()=>{
    return(
        <div className={styles.ongoinProj}>
            <RouteName route={route} />

                <div className={styles.ongoingProj__wrap}>

                    {/*사이드 네비게이터 */}
                    <div className={styles.sideNav}>
                        <SideNav content={sidenavCont}/>
                    </div>

                    {/*진행 중인 프로젝트 + 팀원 평가*/}
                    <div className={styles.ongoingProj__contWrap}>
                                    
                                    {/*진행중인 프로젝트 */}
                                <div className={styles.ongoingProj__ongoingproj}>
                                    {/*제목 */}
                                    <div className={styles.ongoingProj__title}>
                                        진행중인 프로젝트
                                    </div>
                                    {/*작성할 수 있는 포트폴리오 나열 */}
                                    <div className={styles.ongoingProj__cont}>
                                        <ProjectBtn 
                                        button1Text='팀 게시판'
                                        button2Text='포트폴리오' 
                                        border='2px solid var(--main-color2)'
                                        color='var(--main-color2)'/>
                                        <ProjectBtn 
                                        button1Text='팀 게시판' 
                                        button2Text='포트폴리오'  
                                        border='2px solid var(--main-color2)'
                                        color='var(--main-color2)'/>
                                        <ProjectBtn 
                                        button1Text='팀 게시판' 
                                        button2Text='포트폴리오' 
                                        border='2px solid var(--main-color2)'
                                        color='var(--main-color2)'/>
                                    </div>
                                </div>

                                {/*팀원평가 */}
                                <div className={styles.ongoingProj__teamEvaluation}>
                                    
                                    {/*제목 */}
                                    <div className={styles.ongoingProj__title}>
                                        팀원 평가
                                    </div>

                                    {/*팀원평가가 가능한 프로젝트 나열 */}
                                    <div className={styles.ongoingProj__cont}>
                                        <ProjectBtn buttonShow={false} />
                                        <ProjectBtn buttonShow={false}/>
                                        <ProjectBtn buttonShow={false}/>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>

    )
}

export default OngoingProj