import styles from "./NewsWidgets.module.css";
import Himalaya from "../assets/himalaya.png";
import TodayDate from "./TodayDateComponents";
import TodayTime from "./TodayTimeComponents";

function NewsWidgets({imageHeight,newsParaHeight,newsParaFont}){

    return(
        <>
            <div className={styles.imgContainer} style={{height:imageHeight}}>
                <img src={Himalaya} alt="himalayaIcon"/>
                <div className={styles.quesSection}>
                    <p className={styles.heading}>Want to climb Mount Everest?</p>
                    <p><TodayDate/> | <TodayTime/></p>
                </div>
            </div>
            <p className={styles.newsPara} style={{height:newsParaHeight,fontSize:newsParaFont}}>
            In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......
            </p>
        </>
    );
}

export default NewsWidgets;