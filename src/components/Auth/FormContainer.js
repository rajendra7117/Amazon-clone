import React from 'react'
import './FormContainer.css'
import logo from "../../Images/logo2.png";
const FormContainer = (props) => {
  return (
    <div className="container">
    <div className="formDiv">
      <img src={logo} />
      {props.children}
    </div>
  </div>
  )
}

export default FormContainer