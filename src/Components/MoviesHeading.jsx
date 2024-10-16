import styles from "./MoviesHeading.module.css";

function MoviesHeading({heading}){
    return(
        <>
            <p className={styles.para}>{heading}</p>
        </>
    )
}

export default MoviesHeading;