import styles from "./GenerePage.module.css";
import CardComponent from "../Components/CardComponents";
import Action from "../assets/Action.png";
import Drama from "../assets/Drama.png";
import Romance from "../assets/Romance.png";
import Thriller from "../assets/thriller.png";
import Western from "../assets/western.png";
import Horror from "../assets/horror.png";
import Fantasy from "../assets/fantasy.png";
import Music from "../assets/music.png";
import fiction from "../assets/fiction.png";
import Warning from "../assets/Vector.png";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContextProvider/AppContext";
import { useNavigate } from "react-router-dom";
import Button from "../Components/buttonComponents";

const cardFieldValue = [
    {
        id:"1",
        genere:"Action",
        image:Action,
        background:"#FF5209"

    },
    {
        id:"2",
        genere:"Drama",
        image:Drama,
        background:"#D7A4FF"

    },
    {
        id:"3",
        genere:"Romance",
        image:Romance,
        background: "#148A08"

    },
    {
        id:"4",
        genere:"Thriller",
        image:Thriller,
        background: "#84C2FF"

    },
    {
        id:"5",
        genere:"Western",
        image:Western,
        background: "#902500"

    },
    {
        id:"6",
        genere:"Horror",
        image:Horror,
        background: "#7358FF"

    },
    {
        id:"7",
        genere:"Fantasy",
        image:Fantasy,
        background: "#FF4ADE"
    },
    {
        id:"8",
        genere:"Music",
        image:Music,
        background: "#E61E32"
    },
    {
        id:"9",
        genere:"fiction",
        image:fiction,
        background: "#6CD061"
    },
]

function GenerePage(){

    const navigate = useNavigate();
    const {genere,setGenere} = useContext(AppContext);

    const [checkMinimum,setCheckMinimum] = useState("");

    useEffect(()=>{

        const storedgeneres =  JSON.parse(localStorage.getItem("genere")) || [];
        setGenere(storedgeneres);

    },[setGenere])

    const handleChange = (selectgenere)=>{
        const storedgeneres = JSON.parse(localStorage.getItem("genere")) || [];

        if(storedgeneres.includes(selectgenere)){
            const updategeneres = storedgeneres.filter((item)=>item!==selectgenere);
            localStorage.setItem("genere",JSON.stringify(updategeneres));

            setGenere(updategeneres);
            setCheckMinimum(updategeneres.length < 3 ? "Minimum 3 category required" : "" );
            
        }
        else{
            storedgeneres.push(selectgenere);
            localStorage.setItem("genere",JSON.stringify(storedgeneres));

            setGenere(storedgeneres);
            setCheckMinimum(storedgeneres < 3 ? "Minimum 3 category required" : "" );
            
        }

    };

    const checkItemAndNavigate = ()=>{
        if(genere.length < 3){
            setCheckMinimum("Minimum 3 category required");
        }
        else{
            setCheckMinimum("");
            setTimeout(()=>{
                navigate("/CaraouselPage")
            },1000);
        }
    };

    const handleDeleteGenere = (item)=>{

        const storedgeneres = JSON.parse(localStorage.getItem("genere")) || [];

        const updategeneres = storedgeneres.filter((ele)=>ele!==item);
        localStorage.setItem("genere",JSON.stringify(updategeneres));

        setGenere(updategeneres);

        setCheckMinimum(updategeneres.length < 3 ? "Minimum 3 category required" : "" );
    };

    return(
        <div className={`${styles.generePage} ${styles.dflex}`}>
            <div className={styles.leftSection}>
                <h1>Super app</h1>
                <p>Choose your entertainment category</p>
                <div className={`${styles.genere} ${styles.dflex}`}>
                    {genere?.map((item)=>{
                        return (
                            <div className={`${styles.container} ${styles.dflex}`}>
                                <p className={styles.para}>{item}</p>
                                <button className={styles.crossButton} onClick={()=>handleDeleteGenere(item)}>X</button>
                            </div>
                        )
                    })}
                </div>
                {
                    checkMinimum && 
                    <div className={`${styles.warningContainer} ${styles.dflex}`}>
                        <div className={styles.WarningImg}>
                            <img src={Warning} alt="WarningIcon"/>
                        </div>
                        <p className={styles.checkMinimum}>{checkMinimum}</p>
                    </div>
                }

            </div>
            <div className={styles.rightSection}>
                {
                    cardFieldValue.map((element)=>{
                        return (
                            <CardComponent
                                key={element?.id}
                                genere={element?.genere}
                                image={element?.image}
                                background={element.background}
                                onClick={handleChange}
                                classes={
                                    (JSON.parse(localStorage.getItem("genere")) || []).includes(element?.genere)
                                    ? "card-selected"
                                    : "none"
                                }
                            />
                        );
                    })
                }

                {/* <button className={styles.nextPage} onClick={checkItemAndNavigate}>Next Page</button> */}
                <Button buttonName="Next Page"
                        position="absolute"
                        width="170px"
                        fontSize="22px"
                        bgColor="#148A08"
                        borderRadius="38px"
                        bottom="-30px"
                        right="30px"
                        fontFamily="DM Sans"
                        onClick = {checkItemAndNavigate}
                />
            </div>
        </div>
    )
}

export default GenerePage;