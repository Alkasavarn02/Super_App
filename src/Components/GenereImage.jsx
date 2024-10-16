import styles from "./GenereImage.module.css";
import { useEffect,useState } from "react";
import moviesApi from "../Api/MoviesApi";


function GenereRow({id}){

    const [movies,setMovies] = useState([]);

    const suffleArray = (array)=>{
        return array.sort(()=>Math.random()-0.5);
    };

    useEffect(()=>{
        moviesApi(id)
        .then((res)=>res.json())
        .then((data)=>{
            const suffledArray = suffleArray(data?.results || []);
            return setMovies(suffledArray);
        })
    },[id])

    return (
        <div className={styles.movies}>
            {
                movies?.slice(0,5).map((ele)=>{
                    return (
                        <div className={styles.moviesImageConatiner}>
                            <img src={`https://image.tmdb.org/t/p/w500${ele?.backdrop_path}`} alt="moviesPoster"/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default GenereRow;