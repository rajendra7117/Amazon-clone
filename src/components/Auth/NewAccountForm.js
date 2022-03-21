import React, {useState, useEffect} from "react";
import FormContainer from "./FormContainer";
import {NavLink} from 'react-router-dom'
import './NewAccountForm.css'
import { useInput } from "../../hooks/useInput";
import useHttp from "../../hooks/use-http";
import { signUpRequest } from "../../Data/auth-func";
import { Alert } from "react-bootstrap";
import { authSliceActions } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoadingModal from "../UI/LoadingModal";
import Success from "./Success";

const NewAccountForm = (props) => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const [showLoader, setShowLoader] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const {sendRequest, authState} = useHttp(signUpRequest)
    const emailValidate = email =>{
        let valid = false 
        if(email.trim()!=='' && email.trim().includes('@')){
            valid = true
        }
        return valid
      }
      const passwordValidate = password =>{
          let valid = false 
          if(password.trim()!=='' && password.trim().length>=6){
              valid = true
          }
          return valid
        }

       const mobileValidate = (mobile) => {
           let valid=false
        if (mobile.trim().length==10) {
            valid = true
        }
        return valid
       }
    const {input: email, blurHandler: emailBlurHandler, inputHandler: emailHandler, inputHasError: emailHasError} = useInput(emailValidate)
    const {input: password, blurHandler: passwordBlurHandler, inputHandler: passwordHandler, inputHasError: passwordHasError} = useInput(passwordValidate)
    const {input: mobile, blurHandler: mobileBlurHandler, inputHandler: mobileHandler, inputHasError: mobileHasError} = useInput(mobileValidate)
    useEffect(() => {
        if(authState.status==='error'){
            setError(authState.data)
        }
        if(authState.status==='completed'){
            setShowLoader(true)
            setTimeout(() => {
                setShowLoader(false)
                setShowSuccess(true)
               
            }, 2000)
           
         

        }
    }, [authState])
    const nameHandler = e => {
        setName(e.target.value)

    }

  const toggleModal = e => {
      setShowSuccess(prev => !prev)
  }
   
    const onSubmit = e =>{
        e.preventDefault()
        if(name.trim()===''){
            setError('Name should not be empty')
            return
        }
        if(mobileHasError || mobile.trim()===''){
            setError('mobile number is not valid')
            return
        }
        if(emailHasError || email.trim()===''){
            setError('Email is not valid')
            return
        }
        if(passwordHasError || password.trim()===''){
            setError('Password is not valid')
            return
        }
        sendRequest({email: email, password: password})
       
        
    }
   


      

  return (
    <FormContainer>
        <form className="new-form" onSubmit={onSubmit}>
                {error.length>0 && <Alert variant="danger">{error}</Alert>}
            <h1>Create Your Account</h1>
            <div className="form-controls">
                <label>Your Name</label>
                <input text="name" onChange={nameHandler}/>
                <label>Mobile Number</label>
                <input type="tel" onChange={mobileHandler} onBlur={mobileBlurHandler}/>
                <label>Email</label>
                <input type="email" onChange={emailHandler} onBlur={emailBlurHandler} />
                <label>Password</label>
                <input type="password" onChange={passwordHandler} onBlur={passwordBlurHandler}/>
                <span className="text-muted"> Password should be 6 characters</span>
                <button>continue</button>
                <div className="sigin-form">
                    <span>Already have an account? </span> <NavLink to="/sign-in">Sign-In</NavLink>
                </div>
            </div>
        </form>
        {showLoader &&  <LoadingModal />}
        {ShowSuccess && <Success toggleModal={toggleModal} message={"Account Created"} route={'/sign-in'} message2={'Please sign in to your Account'} button={'Sign in'}/>}
       
    </FormContainer>
  );
};

export default NewAccountForm;
