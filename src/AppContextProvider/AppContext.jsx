import {createContext, useEffect, useState} from "react"

export const AppContext = createContext()

const AppContextProvider = ({children}) =>{

    const [user,setUser] = useState()
    const [genere,setGenere] = useState([])

    const updateUser = (data)=>{
        localStorage.setItem("user",JSON.stringify(data))
        setUser(data)
    }

    useEffect(()=>{
        const userFromLS = JSON.parse(localStorage.getItem("user"))
        const genereFromLS = JSON.parse(localStorage.getItem("genere")) || []

        if(userFromLS || genereFromLS){
            setGenere(genereFromLS)
            setUser(userFromLS)
        }

    },[])

    return(
        <AppContext.Provider value={{user,genere,setGenere,updateUser}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
