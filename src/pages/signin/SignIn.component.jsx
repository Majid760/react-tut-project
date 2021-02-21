import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './SignIn.style.css';
import FormInput from '../../components/utilities/input/FormInput.component';
import CustomButton from '../../components/utilities/custom-button/CustomButton.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.util.js';


const SignIn=()=>{
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(value);
        setFormData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
    
    const submitHandle=(e)=>{
        e.preventDefault();
        const {password,email}=formData;
        if((password==null || password==="") || (email==null || email==="")){
            alert("Please fill the all fields!");
        }
        else {
            try{
                auth.signInWithEmailAndPassword(email,password);
                setFormData({
                    email:'',
                    password:''
                });

            }catch(e){
                console.error("error in sign in ",e.message);
            }
        }


    }

    return(
        <>
        <form  onSubmit={submitHandle}>
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 ">
                <div className="card card0 border-0">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row"> 
                                    <img src="https://i.imgur.com/CXQmsmF.png" alt='sign in' className="logo"/> 
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> 
                                    <img src="https://i.imgur.com/uNGdWHi.png" alt='sign in' className="image"/> 
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div className="facebook text-center mr-3">
                                        <i className="fab fa-google" onClick={signInWithGoogle}></i>
                                    </div>
                                    <div className="twitter text-center mr-3">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="linkedin text-center mr-3">
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div> <small className="or text-center">Or</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3"> 
                                <FormInput  type="email" label="Type your email:" name="email" handleChange={(e)=>{handleChange(e)}}  defaultValue=""   required/>
                                </div>
                                <div className="row px-3"> 
                                <FormInput type="password" label="Password:" name="password" handleChange={(e)=>{handleChange(e)}} defaultValue={formData.password}  required/> 
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline"> 
                                        <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> 
                                        <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> 
                                    </div> 
                                    <Link to="" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
                                </div>
                                <div className="row mb-3 px-3"> 
                                    <CustomButton type="submit" >Log in</CustomButton> 
                                </div>
                                <div className="row mb-4 px-3"> 
                                    <small className="font-weight-bold">Don't have an account? <Link className="text-danger " to="/signup">Register</Link></small> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
     </>
    )
}

export default SignIn;