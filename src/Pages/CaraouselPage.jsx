import styles from "./CaraouselPage.module.css";
import UserWidgets from "../Components/UserWidgets";
import WeatherWidgets from "../Components/WeatherWidgets";
import NewsWidgets from "../Components/NewsWidgets";

function CaraouselPage(){
    return (
        <div className={styles.caraouselPage}>

            <div className={styles.userWidgets}>
                <UserWidgets/>
            </div>

            <div className={styles.weatherWidgets}>
                <WeatherWidgets/>
            </div>

            <div className={styles.newsWidgets}>
                <NewsWidgets/>
            </div> 
            
        </div>
    )
}

export default CaraouselPage;