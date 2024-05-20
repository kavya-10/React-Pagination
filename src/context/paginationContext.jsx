import { createContext,useState ,useContext} from "react";
import { useQuery } from "./queryContext";
import { useSearch } from "./searchContext";
import useFetch from "../hooks/useFetch";
import React from 'react'

// create the Store for pagination
const pageContext=createContext()



export const PaginationProvider = ({children}) => {
    const {query}=useQuery()
    const {allData}=useFetch(query)

    //  setting the logic for pagination

    const [currentpage,setCurrentPage]=useState(1)
    const [pageCount,setPagecount]=useState(9)
    const lastIndex=currentpage * pageCount
    const firstIndex= lastIndex - pageCount
    const records = allData.slice(firstIndex,lastIndex)

// displaying the page numbers in pagination
const totalpages = Math.ceil(allData.length/pageCount)
let Pagenumbers=[]
for (let i=1;i<totalpages.length;i++){
    Pagenumbers.push(i)
}

const handlePageChange=(page)=>{
    setCurrentPage(page)
}
const handlePageCountChange=(value)=>{
    setPagecount(1)

}

return (
    <div>
        <pageContext.Provider value={{
            records,
            totalpages,
            Pagenumbers,
            pageCount,
            handlePageChange,
            handlePageCountChange

        }}>
            {children}
        </pageContext.Provider>
    </div>
)
}


export const usePagination=()=>{
    // using the contextstorevalues
    const context=useContext(pageContext)
    console.log(context)
    if(context==='undefined'){
        throw new Error('context is undefined😭')
    }
    return context
}

export default PaginationProvider