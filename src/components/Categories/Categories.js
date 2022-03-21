import React, {useEffect} from 'react'
import './Categories.css'
import { commerce } from '../../lib/commerce';
import CategoriesGrid from './CategoriesGrid';
const Categories = () => {
  
const fetchCategories = async () => {
    const response = await commerce.categories.retrieve('cat_kd6Ll2VVJlV2mj')
  
}

 useEffect(() => {
  fetchCategories()
 }, [])
 

  return (
    <div className='cat-container'>
        <CategoriesGrid />
    </div>
  )
}

export default Categories