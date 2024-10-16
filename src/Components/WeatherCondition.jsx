import styles from "./WeatherCondition.module.css";

function WeatherCondition({condition,image,weatherImgWidth,weatherImgHeight,weatherFontSize}){

    return (
        <div className={styles.weatherCondition}>
            <div className={styles.imgContainer} style={{width:weatherImgWidth,height:weatherImgHeight}}>
                <img src={image} alt="weatherIcon"/>
            </div>
            <p style={{fontSize:weatherFontSize}}>{condition}</p>
        </div>
    )
}

export default WeatherCondition;