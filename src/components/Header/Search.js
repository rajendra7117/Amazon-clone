import React, {useRef, useState, useEffect} from 'react'
import {BsSearch} from 'react-icons/bs'
import './Search.css'
import {commerce} from '../../lib/commerce'
import { Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {searchSliceActions} from '../../store/SearchResultsSlice';
import {toast, ToastContainer} from 'react-toastify'

const Search = () => {
  const searchRef = useRef()

  const [noResults, setNoResults] = useState('')
  const [error, setError]= useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const changeHandler = e => {
    setNoResults(false)
    setError(false)
  }

  useEffect(() => {
      if(error){
        
        toast.info(error, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setError('')
      }
      if(noResults){
        toast.info("No Results", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setNoResults(false)
      }
  }, [error, noResults])
  const searchProduct = async (e) => {  
    e.preventDefault()
    setError('')
    const keyword = searchRef.current.value
    if(keyword===''){
      setError('Please type something')
    }
    if(keyword!==''){
      try{
      const {data}= await commerce.products.list({
        query: keyword
      })
      if(!data){
        setNoResults(true)
      }
      else{
        
        dispatch(searchSliceActions.setResults(data))
        history.push('/search')
        return
      }
      }
      catch(error){
          
        setError('Something went wrong')
          return
      }
    }
  
  
 
  }
  return (
    <div className='search-div'>
       <form onSubmit={searchProduct}>
       <input className='searchInput' ref={searchRef} onChange={changeHandler}/> <button> <BsSearch className='searchIcon'/> </button>
       <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      <ToastContainer />
       </form>
    </div>
  )
}

export default Search