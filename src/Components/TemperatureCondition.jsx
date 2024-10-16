import styles from "./TemperatureCondition.module.css";

function TemperatureCondition({temperature,image,pressure,tempSectionGap,tempFont,degreeFont,tempGap,tempIconImg,tempParaFont,tempWidth}){
    return(
        <div className={styles.temperatureCondition} style={{gap:tempSectionGap}}>
            <h1 style={{fontSize:tempFont}}>{temperature}<sup className={styles.degree} style={{fontSize:degreeFont}}>0</sup>C</h1>
            <div className={styles.temperature} style={{gap:tempGap,width:tempWidth}}>
                <div className={styles.imgContainer} style={{width:tempIconImg}}>
                    <img src={image} alt="tempIcon"/>
                </div>
                <p style={{fontSize:tempParaFont}}>{pressure} mbar Pressure</p>
            </div>
        </div>
    )
}

export default TemperatureCondition;