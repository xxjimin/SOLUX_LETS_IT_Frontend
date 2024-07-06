import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import ApplyHireProj from "./Screen/MyProject/ApplyHireProj/ApplyHireProj";
//import CompletePort from "./Screen/MyPage/MyPortfolio/PortfolioWrite/Complete/CompletePort";
//import PortfolioWrite from "./Screen/MyPage/MyPortfolio/PortfolioWrite/PortfolioWrite";
//import ApplyProfile from "./Screen/MyProject/ApplyHireProj/ApplyProfile/ApplyProfile";
//import MyPortfolio from "./Screen/MyPage/MyPortfolio/MyPortfolio";
//import MyProfile from "./Screen/MyPage/MyProfile/MyProfile";
 //import AttendProj from "./Screen/MyProject/AttendProj/AttendProj";
//import Scrap from "./Screen/MyProject/Scrap/Scrap";

function App() {
  return (
  <div className={styles.wrap}>
    <Header />
    <div className={styles.main}> 
    <ApplyHireProj /> {/*라우팅 시 outlet이 들어갈 부분*/} 
    </div>
  </div>
  )
}

export default App;
