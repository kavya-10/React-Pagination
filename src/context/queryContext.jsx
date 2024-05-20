import { createContext,useState ,useContext} from "react";

// 🖊step1:
// creating the Store for Query endpoints
const QueryContext=createContext()
   
// 🖊step2:creating the Contextprovider
export const QueryProvider=({children})=>{
    const [query,setQuery]=useState("")
    
    return(
        <QueryContext.Provider value={{query,setQuery}}>
           {children}
        </QueryContext.Provider>
    )
}

// creating a custom hook to reuse the logic across different component
export const useQuery=()=>{
    // using the contextstorevalues
    const context=useContext(QueryContext)
    console.log(context)
    if(context==='undefined'){
        throw new Error('context is undefined😭')
    }
    return context
}