import { useQuery } from '../context/queryContext'
import { useSearch } from '../context/searchContext'

// options array to store the endpoints
const Options = [
  { option: 'characters', label: 'characters' },
  { option: 'characters/house/gryffindor', label: 'house' },
  { option: 'characters/staff', label: 'staff' },
  { option: 'characters/students', label: 'student' },
  { option: 'spells', label: 'spells' }
]


const Header = () => {
  return (
    <div>
     <SearchComponent/>
    </div>
  )
}



export const SearchComponent = () => {
 const {setQuery}=useQuery()
 const {setSearch}=useSearch()


  // function to handle the select dropdown
  const handleSelect=(e)=>{
    console.log(e.target.value)
    setQuery(e.target.value)

  }
  // function to handle search values
  const handleSearch=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
    
  }
  return (
    <div className='container'>
      <div className="row gx-0">
        <div className="col-sm-4 col-md-4 col-lg-4 col-4">
        <select className="form-select" aria-label="Default select example"
         onClick={(e)=>handleSelect(e)}>
          {Options.map((val)=>(  <option key={val.option} value={val.option}>{val.label}</option>))}
        </select>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 col-6">
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search......🔍"
         onClick={(e)=>handleSearch(e)}/>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2 col-2">
        <button type="button" className="btn">🔍</button>
        </div>
      </div>
    </div>
  )
}
export default Header