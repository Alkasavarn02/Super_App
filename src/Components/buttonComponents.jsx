import styles from "./buttonComponents.module.css";

function Button({buttonName,position,width,fontSize,bgColor,borderRadius,bottom,right,fontFamily,onClick}){
    return (
        <>
            <button className={styles.btn}
            style={{
                    position:position,
                    width:width,
                    fontSize:fontSize,
                    backgroundColor:bgColor,
                    borderRadius:borderRadius,
                    bottom:bottom,
                    right:right,
                    fontFamily:fontFamily
                    }}
            onClick={onClick}
            >{buttonName}</button>
        </>
    )
}

export default Button;