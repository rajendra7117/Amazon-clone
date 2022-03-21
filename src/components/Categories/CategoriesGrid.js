import React from 'react'
import { catArray } from '../../Data/categoriesArray'
import Category from './Category'
import './CategoriesGrid.css'
const CategoriesGrid = () => {
    const content = catArray.map(cat => <Category  key={cat.name} name={cat.name} img={cat.img} route={cat.route} id={cat.id} />)
 
  return (
    <div className='cat-grid'>
        {content}
    </div>
  )
}

export default CategoriesGrid