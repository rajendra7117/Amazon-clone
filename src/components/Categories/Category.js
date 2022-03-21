import React from 'react'
import './Category.css'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectedCategorySliceActions } from '../../store/SelectedCategorySlice'
const Category = (props) => {
 const dispatch = useDispatch()
 const history = useHistory()

    const selectCategory = e => {
        dispatch(selectedCategorySliceActions.setCategory({id: props.id}))
        history.push(props.route)
    }
  return (
    <div className='category-card' onClick={selectCategory}>
        <h4>{props.name}</h4>
        <img src={props.img}/>
    </div>
  )
}

export default Category