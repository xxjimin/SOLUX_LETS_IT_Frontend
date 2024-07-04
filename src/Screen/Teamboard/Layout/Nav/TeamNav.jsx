import styles from "./TeamNav.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const TeamNav = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);

  const nav = useNavigate();

  const navigateToTeamboard = () => {
    nav("/");
  };
  const navigateToMember = () => {
    nav("/member");
  };
  const navigateToManage = () => {
    nav("/manage");
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__label}>학원 청구 정산 서비스</div>
        <div className={styles.nav__buttonContainer}>
          <button
            className={`${styles.nav__button} ${
              currentUrl === "/" ? styles["nav__button--selected"] : ""
            }`}
            onClick={navigateToTeamboard}
          >
            프로젝트 정보
          </button>
          <button
            className={`${styles.nav__button} ${
              currentUrl === "/member" ? styles["nav__button--selected"] : ""
            }`}
            onClick={navigateToMember}
          >
            팀원 설정
          </button>
          <button
            className={`${styles.nav__button} ${
              currentUrl === "/manage" || currentUrl === "/manage/edit"
                ? styles["nav__button--selected"]
                : ""
            }`}
            onClick={navigateToManage}
          >
            프로젝트 관리
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamNav;