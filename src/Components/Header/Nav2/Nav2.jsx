import { useState } from 'react';
import styles from './Nav2.module.css';

const Nav2 = () => {

    const navCont = ['프로젝트 찾기', '내 프로젝트', '공모전/뉴스레터', '렛츠IT 커뮤니티']
    const subNavCont = {
        '프로젝트 찾기': ['전체 프로젝트', '지역으로 찾기', '분야로 찾기', '내 맞춤 프로젝트'],
        '내 프로젝트': ['구인/신청 프로젝트', '참여 프로젝트', '스크랩'],
    };

    const [hoverState, setHoverState] = useState({
        '프로젝트 찾기': false,
        '내 프로젝트': false,
        '공모전/뉴스레터': false,
        '렛츠IT 커뮤니티': false
    });
    //Nav / subNav data

    const handleMouseEnter = (menu) => {
        setHoverState(prevState => ({
            ...prevState,
            [menu]: true
        }));
    };

    const handleMouseLeave = (menu) => {
        setHoverState(prevState => ({
            ...prevState,
            [menu]: false
        }));
    };
    //mouseEnter, mouseLeave시 hover state 설정

    return (
        <div className={styles.nav2}>
            <div className={styles.nav2__container}>
                <div className={styles.nav2__contentsWrap}>
                {navCont
                    .map((menu, id) => (
                        <div className={styles.nav2__contents} 
                        key={id} onMouseEnter={() => handleMouseEnter(menu)} onMouseLeave={() => handleMouseLeave(menu)}>

                            <button className={styles.nav2__button}>{menu}</button>

                            {hoverState[menu] && subNavCont[menu] && (
                                <ul className={styles.nav2__subnav}>
                                    {subNavCont[menu].map((item, itemId) => <li className={styles.nav2__subnav_item} key={itemId}>{item}</li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                    </div>
                <button className={styles.nav2__writeBtn}>구인글 작성</button>
            </div>
        </div>
    );
};

export default Nav2;