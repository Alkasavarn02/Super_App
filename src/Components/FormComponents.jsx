import { useContext, useState } from "react";
import styles from "./FormComponents.module.css";
import validateForm from "../validateForm/ValidateForm.jsx";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider/AppContext.jsx";
import Button from "./buttonComponents.jsx";

const inputTextField = [
    {
        id:"1",
        type:"text",
        placeholder:"Name",
        name:"name"
    },
    {
        id:"2",
        type:"text",
        placeholder:"UserName",
        name:"userName"
    },
    {
        id:"3",
        type:"email",
        placeholder:"Email",
        name:"email"
    },
    {
        id:"4",
        type:"number",
        placeholder:"Mobile",
        name:"phoneNo"
    },
]

function Form({formData,setFormData}){

    const {updateUser} = useContext(AppContext)

    const [check,setCheck] = useState(false)
    const [err,setError] = useState()

    const navigate = useNavigate()

    const handleInputChange = (e)=>{
        setFormData((prev)=>(
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }

    const onFormSubmit = (e)=>{
        e.preventDefault()

        const {isValid,errors} = validateForm(formData,check)

        if(!isValid){
            setError({...errors})
            return;
        }
        else {
            setError(null)
            updateUser(formData)
            setTimeout(()=>{navigate("/GenerePage")},1000)
        }
    }

    return(
        <>
            <form className={styles.form} onSubmit={onFormSubmit}>
                {/* <input type="text" placeholder="Name" name="name" value={formData?.name} onChange={handleInputChange}/>
                {err?.name && <p className={styles.para}>{err?.name}</p>}

                <input type="text" placeholder="UserName" name="userName" value={formData?.userName} onChange={handleInputChange}/>
                {err?.userName && <p className={styles.para}>{err?.userName}</p>}

                <input type="email" placeholder="Email" name="email" value={formData?.email} onChange={handleInputChange}/>
                {err?.email && <p className={styles.para}>{err?.email}</p>}

                <input type="number" placeholder="Mobile" name="phoneNo" value={formData?.phoneNo} onChange={handleInputChange}/>
                {err?.phoneNo && <p className={styles.para}>{err?.phoneNo}</p>} */}

                {
                    inputTextField.map((element)=>{
                        return (
                            <>
                                <input 
                                key={element?.id}
                                type={element?.type}
                                placeholder={element?.placeholder}
                                name={element?.name} value={formData?.[element?.name] || ""}
                                onChange={handleInputChange}
                                />
                                {err?.[element?.name] && <p className={styles.para}>{err?.[element?.name]}</p>}
                            </>
                        )
                    })

                }
                
                <div className={styles.checkBoxContainer}>
                    <input type="checkbox" name="checkbox" onChange={()=>setCheck(true)}/>
                    <p>Share my registration data with Superapp</p>
                </div>
                {err?.check && <p className={styles.para}>{err?.check}</p>}

                <Button buttonName="SIGN UP"/>
            </form>
        </>
    )
}

export default Form;