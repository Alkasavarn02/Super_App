import styles from "./DashboardPage.module.css";
import NewsWidgets from "../Components/NewsWidgets.jsx";
import UserWidgets from "../Components/UserWidgets.jsx";
import WeatherWidgets from "../Components/WeatherWidgets.jsx";
import { useNavigate } from "react-router-dom";

function DashboardPage(){

    const navigate = useNavigate()

    const handleChange = ()=>{
        setTimeout(()=>{
            navigate("/MoviesPage")
        },1000)
    }

    return (
        <div className={styles.dashboard}>
            <div className={`${styles.div1} ${styles.borderRadius}`}>
                <UserWidgets
                    bannerWidth="100px"
                    bannerheight="200px"
                    rightPFont="18px"
                    righth1Font="30px"
                    h1marginbottom="15px"
                    pMarginbottom="5px"
                    genereContainerWidth="80px"
                    genereContainerheight="25px"
                    genereFont="15px"
                    genereParaPaddingLeft="10px"
                    genereContainerGap="10px"
                    />
            </div>

            <div className={`${styles.div2} ${styles.borderRadius}`}>
                <WeatherWidgets
                    dateAndTimeHeight="40px"
                    dateAndTimeFont="25px"
                    dateAndTimeGap="80px"
                    weatherSectionHeight="calc(100% - 40px)"
                    verticalLineHeight="40px"
                    weatherImgWidth="50px"
                    weatherImgHeight="40px"
                    weatherFontSize="17px"
                    tempSectionGap="6px"
                    tempFont="25px"
                    degreeFont="12px"
                    tempGap="10px"
                    tempIconImg="18px"
                    tempParaFont="11px"
                    tempWidth="80px"
                    windAndHumidFont="12px"
                    windAndHumidImg="15px"
                    windAndHumidContainer="100px"
                    windAndHumidGap="5px"
                    />
            </div>

            <div className={`${styles.div3} ${styles.borderRadius}`}> </div>

            <div className={`${styles.div4} ${styles.borderRadius}`}>
                <h1 className={styles.heading}>All Notes</h1>
                <p className={styles.paraheading}>This is how I am going to learn MERN Stack in next 3 months.</p>
                <textarea/>
            </div>

            <div className={`${styles.div5} ${styles.borderRadius}`}>
                <NewsWidgets imageHeight="375px" newsParaHeight="calc(100% - 375px)" newsParaFont="17px"/>
            </div>

            <button className={styles.btn} onClick={handleChange}>Browse</button>
        </div>
    );
}

export default DashboardPage;