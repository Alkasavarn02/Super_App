import styles from "./VerticalLine.module.css";

function VerticalLine({height}){
    return(
        <>
            <div className={styles.verticalLine} style={{height:height}}></div>
        </>
    );
}

export default VerticalLine;