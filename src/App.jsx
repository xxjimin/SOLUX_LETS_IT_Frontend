import styles from "./App.module.css";
import Header from "./Components/Header/Header";
 import PortfolioWrite from "./Screen/MyPage/MyPortfolio/PortfolioWrite/PortfolioWrite";
// import ApplyProfile from "./Screen/MyProject/HiringProj/Apply_Profile/ApplyProfile";
// import MyPortfolio from "./Screen/MyPage/MyPortfolio/MyPortfolio";
//import MyProfile from "./Screen/MyPage/MyProfile/MyProfile";
import OngoingProj from "./Screen/MyProject/OngoingProj/OngoingProj";

function App() {
  return (
  <div className={styles.wrap}>
    <Header />
    <div className={styles.main}> 
    <OngoingProj/> {/*라우팅 시 outlet이 들어갈 부분*/} 
    </div>
  </div>
  )
}

export default App;
