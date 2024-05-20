import { QueryProvider } from "../context/queryContext"
import { SearchProvider } from "../context/searchContext"
import { PaginationProvider } from '../context/paginationContext'


const Provider = ({children}) => {
  return (
    <QueryProvider>
        <SearchProvider>
         <PaginationProvider>
         {children}
         </PaginationProvider>
        </SearchProvider>
    </QueryProvider>
  )
}

export default Provider