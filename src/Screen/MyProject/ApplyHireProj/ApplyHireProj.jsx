import Button from "../../../Components/Button/Button"
import RouteName from "../../../Components/RouteName/RouteName"
import SideNav from "../../../Components/SideNav/SideNav"
import ApplicantBtn from "./ApplicantBtn/ApplicantBtn"
import styles from './ApplyHireProj.module.css'

const route = ['내 프로젝트','구인/신청 프로젝트']
const sidenavCont = ['구인/신청 프로젝트','참여 프로젝트','스크랩']

const ApplyHireProj = ()=>{
    return(
        <div className={styles.ApplyHireProj}>
            <RouteName route={route} />

                {/*사이드 네비게이터 + 구인중인 프로젝트 */}
                <div className={styles.ApplyHireProj__wrap}>

                    {/*사이드 네비게이터 */}
                    <div className={styles.sideNav}>
                        <SideNav content={sidenavCont}/>
                    </div>

                    {/*구인중인 프로젝트 + 신청자 목록*/}
                    <div className={styles.HireProj__contWrap}>
                            {/*제목 */}
                            <div className={styles.HireProj__title}>
                                구인중인 프로젝트
                            </div>
                            {/*프로젝트 구인글 + 버튼 + 신청자 목록 (컨텐츠) */}
                            <div className={styles.HireProj__content}>

                                {/*(대체 예정)프로젝트 컴포넌트 + 모집 마감/팀원/글삭제 버튼*/}
                                <div className={styles.HireProj__ProjectSetting}>
                                    <div className='Project_Component' style={{width:'315px', height:'240px',backgroundColor:'var(--select-color)'}} />
                                    <div className={styles.HireProj__buttonWrap}>
                                    <Button text='모집 마감'/>
                                    <Button text='팀원' type='SEC_70x40'/>
                                    <Button  text='글 삭제' type='NONE__TEXT-TC2'/>
                                    </div>
                                </div>

                                {/*프로젝트 신청자*/}
                                <div className={styles.HireProj__Applicant}>
                                    <ApplicantBtn />
                                    <ApplicantBtn />
                                    <ApplicantBtn />
                                    <ApplicantBtn />
                                    <ApplicantBtn />
                                </div>

                                hi
                            </div>

                    </div>
                </div>
        </div>
    )
}

export default ApplyHireProj