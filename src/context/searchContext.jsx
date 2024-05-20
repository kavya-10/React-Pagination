import { createContext,useState ,useContext} from "react";

// 🖊step1:
// creating the Store for Query endpoints
const SearchContext=createContext()
    
// 🖊step2:creating the Contextprovider
export const SearchProvider=({children})=>{
    const [search,setSearch]=useState("")

    return(
        <SearchContext.Provider value={{search,setSearch}}>
           {children}
        </SearchContext.Provider>
    )
}

// creating a custom hook to reuse the logic across different component
export const useSearch=()=>{
    // using the contextstorevalues
    const context=useContext(SearchContext)
    if(context==='undefined'){
        throw new Error('context is undefined😭')
    }
    return context
}