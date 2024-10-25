import { createContext, useContext , useState} from "react";
let useProd = createContext();
export const useMain = () => useContext(useProd)


 export const Context = ({children}) => {
  

    const [prod , setProd] = useState('')
    const [name , setName] = useState('')
    const [about , setAbout] = useState('')
    const [age , setAge] = useState('')
    const [date , setDate] = useState([])
    const [category , setCategory] = useState('')

    let values = {


prod ,
 setProd,
 name , 
 setName,
 about ,
 setAbout,
 age ,
 setAge,
 date , 
 setDate,
 category , 
 setCategory,


    }
    return (
       <useProd.Provider value={values}>{children}</useProd.Provider>
    );
};

export default Context;