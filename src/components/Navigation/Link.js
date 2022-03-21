import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectedCategorySliceActions } from '../../store/SelectedCategorySlice'
const Link = (props) => {
    const dispatch = useDispatch()
    const selectedCat = e => {
        dispatch(selectedCategorySliceActions.setCategory({id: props.id}))
        props.toggleMenu()
    }
  return (
    <Fragment>
        <NavLink to={props.to} onClick={selectedCat}>{props.name}</NavLink>
    </Fragment>
  )
}

export default Link