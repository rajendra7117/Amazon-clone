import React, {useState, useEffect} from "react";
import "./SignInForm.css";
import { NavLink } from "react-router-dom";
import FormContainer from "./FormContainer";
import { useInput } from "../../hooks/useInput";
import useHttp from "../../hooks/use-http";
import { signInRequest } from "../../Data/auth-func";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/AuthSlice";
import { useHistory } from "react-router-dom";
import LoadingModal from "../UI/LoadingModal";
import Success from "./Success";
const SignInForm = () => {
    const [error, setError] = useState('')
    const history = useHistory()
    const {sendRequest, authState} = useHttp(signInRequest)
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [showSuccess, setShowSuccess]  = useState(false)

    useEffect(() => {
   if(authState.status==='error'){
       setError(authState.data)
   }
   if(authState.status==='completed'){
     setShowModal(true)
     setTimeout(() => {
       setShowModal(false)
       
      dispatch(authSliceActions.setAuthStatus({isLoggedIn: true, authToken: authState.data}))
      dispatch(authSliceActions.storeUserDetails({data: authState.data}))
      setShowSuccess(true)

   
     }, 2000)
   
   }
    }, [authState])
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
    
    const {input: email, inputHandler: emailHandler, inputBlurHandler: emailBlurHandler, inputHasError: emailHasError} = useInput(emailValidate)
    const {input: password, inputHandler: passwordHandler, inputBlurHandler: passwordBlurHandler, inputHasError: passwordHasError} = useInput(passwordValidate)
 
    const submitHandler = e => {
        e.preventDefault()
        if(emailHasError || email===''){
            setError('Email is not valid')
            return

        }
        if(passwordHasError || password==='')
        {
            setError('password is not valid')
            return
        }
      sendRequest({email: email, password: password})
    }
    const toggleModal = e => {
      setShowSuccess(prev => !prev)
    }

  return (
    <FormContainer>
      <form onSubmit={submitHandler}> 
      {error.length>0 && <Alert variant="danger">{error}</Alert>}
        <div className="form-controls">
          <span>Sign-In</span>
          <label>Email</label>
          <input type="email" onChange={emailHandler} onBlur={emailBlurHandler}/>
          <label>password</label>
          <input type="password" onChange={passwordHandler} onBlur={passwordBlurHandler}/>
          <button>Continue</button>
          <p>
            By Continuing, you agree to Amazon's{" "}
            <a>Condiotions of User and Privacy Notice</a>
          </p>
        </div>
      </form>

      <div className="section2">
        <span> New To Amazon?</span>
        <NavLink to="/new-account">Create your Amazon account</NavLink>
      </div>
      {showModal && <LoadingModal />}
      {showSuccess && <Success toggleModal={toggleModal} message={"Sign in successful"} route={'/'} message2={'Happy Shopping'} button={'Shop Here'}/>}
    </FormContainer>
  );
};

export default SignInForm;
