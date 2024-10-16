import styles from "./HomePage.module.css";
import Form from "../Components/FormComponents";
import { useState } from "react";

function HomePage(){

    const [formData,setFormData] = useState(
        {
            name:"",
            userName:"",
            email:"",
            phoneNo:""
        }
    )

    return (
        <>
            <div className={`${styles.home} ${styles.dflex}`}>
                <div className={styles.leftSide}>
                    <h1>Discover new things on Superapp</h1>
                </div>
                <div className={`${styles.rightSide} ${styles.dflex}`}>
                    <h1>SuperApp</h1>
                    <p>Create your new account</p>
                    <Form formData={formData} setFormData={setFormData}/>
                    <p className={styles.para}>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                    <p className={styles.para}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
                </div>
            </div>
        </>
    )
}

export default HomePage;