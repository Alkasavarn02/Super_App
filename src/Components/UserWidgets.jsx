import { useContext } from "react";
import styles from "./UserWidgets.module.css";
import userBanner from "../assets/useBanner.png";
import { AppContext } from "../AppContextProvider/AppContext";

function UserWidgets({
    bannerWidth,
    bannerheight,
    rightPFont,
    righth1Font,
    h1marginbottom,
    pMarginbottom,
    genereContainerWidth,
    genereContainerheight,
    genereFont,
    genereParaPaddingLeft,
    genereContainerGap
}){

    const {user,genere} = useContext(AppContext);

    return(
        <>
            <div className={styles.banner} style={{width:bannerWidth,height:bannerheight}}>
                <img src={userBanner} alt="BannerImage"/>
            </div>
            <div className={styles.rightSide}>
                <p className={styles.marginBottom} style={{fontSize:rightPFont, marginBottom:pMarginbottom}}>{user?.name}</p>
                <p className={styles.marginBottom} style={{fontSize:rightPFont, marginBottom:pMarginbottom}}>{user?.email}</p>
                <h1 style={{fontSize:righth1Font,marginBottom:h1marginbottom}}>{user?.userName}</h1>
                <div className={styles.genereContainer} style={{gap:genereContainerGap}}>
                    {genere.map((item)=>{
                        return <p className={styles.para} style={{width:genereContainerWidth,height:genereContainerheight,fontSize:genereFont,paddingLeft:genereParaPaddingLeft}}>{item}</p>
                    })}
                </div>
            </div>
        </>
    );
}

export default UserWidgets;