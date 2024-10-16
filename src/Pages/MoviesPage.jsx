import styles from "./MoviesPage.module.css";
import bannerImg from "../assets/useBanner.png";
import MoviesHeading from "../Components/MoviesHeading";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider/AppContext";
import GenereRow from "../Components/GenereImage";

const movies = {
    "Action":28,
    "Drama":18,
    "Romance": 10749,
    "Thriller": 53,
    "Western": 37,
    "Horror": 27,
    "Fantasy": 14,
    "Music": 10402,
    "Fiction": 878
}

function MoviesPage(){

    const {genere} = useContext(AppContext)

    return (
        <div className={styles.moviesPage}>
            <div className={styles.header}>
                <h1>Super app</h1>
                <div className={styles.bannerContainer}>
                    <img src={bannerImg} alt="bannerIcon" />
                </div>
            </div>
            <div className={styles.moviesSection}>
                <p className={styles.moviesSectionHeading}>Entertainment according to your choice</p>
                {
                    genere.map((ele)=>{
                        return (
                            <>
                                <MoviesHeading heading={ele}/>
                                <GenereRow id={movies[ele]}/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MoviesPage;