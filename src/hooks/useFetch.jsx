import {useState,useEffect} from 'react'
import axios from 'axios';

const useFetch = (query,search) => {
    // state for holding the api data
    const [allData,setAllData]=useState([])


    // Hook for handling the side effects while fetching the data

    useEffect(()=>{
       
        // function for fetching the api data
       const getUser=async()=> {
            try {
              const response = await axios.get(`https://hp-api.onrender.com/api/${query}/?name=${search}`);
              console.log(response);
              setAllData(response.data)
            } catch (error) {
              console.error(error);
            }
          }
          getUser()

      return ()=>{}  // cleanup -unmounting the component if req

    },[query,search])

 


  return {allData}
}

export default useFetch