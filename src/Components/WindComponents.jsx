import styles from "./WindComponents.module.css";

function WindAndHumidCondition({image,Condition,width,gap,windAndHumidFont,windAndHumidImg,windAndHumidContainer}){
    return (
        <div className={styles.windAndHumidCondition} style={{gap:gap,width:windAndHumidContainer}}>
            <div className={styles.imgContainer} style={{width:width,height:windAndHumidImg}}>
                <img src={image} alt="windIcon" />
            </div>
            <p className={styles.para} style={{fontSize:windAndHumidFont}}>{Condition}</p>
        </div>
    )
}

export default WindAndHumidCondition;