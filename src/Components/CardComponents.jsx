import styles from "./CardComponents.module.css";

function CardComponent({genere,image,background,onClick,classes}){

    // const genereFromLS = JSON.parse(localStorage.getItem("genere")) || [];

    return(
        <>
            <div className={`${styles.card} ${styles[classes]}`}
                style={{
                    backgroundColor: background,
                    // border: genereFromLS.includes(genere) ? "4px solid green" : "none",
                }}
                onClick={()=>onClick(genere)}
            >
                <h1>{genere}</h1>
                <div className={styles.imgContainer}>
                    <img src={image} alt={`${genere}`}/>
                </div>
            </div>
        </>
    )
}

export default CardComponent;