import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './Signup.style.css';
import CustomButton from '../../components/utilities/custom-button/CustomButton.component';
import FormInput from '../../components/utilities/input/FormInput.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.util.js';

const SignUp=()=>{
    const [formData,setFormData]=useState({
        fullName:'',
        email: '',
        password: '',
        c_password: '',
    });
    let [validating,setValidating]=useState(false);

    const handleChange=(e)=>{
        setFormData((preVal)=>{
            const {name, value}=e.target;
            console.log(value);
            return {
                ...preVal,
                [name]:value,
            }
        })
    }

    const handleBlur=()=> {
        setValidating(true);
      };

    const renderPasswordConfirmError =()=> {
        if (validating && formData.password !== formData.c_password) {
          return (
            <div>
              <label className="text-danger text-center text-capitalize">Please enter the same password again.</label>
            </div>
          );
        }  
        return null;
      }


    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(formData.password !== formData.c_password){
            handleBlur();
            renderPasswordConfirmError();
            return;
        }

        try{
        const {fullName,email, password,c_password}=formData;
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{fullName});
        setFormData({
            fullName:'',
            email: '',
            password: '',
            c_password: '',
        })
        }catch(e){
            console.error(e.message);
        }
    }

    return(
        <>
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
                        <form onSubmit={handleSubmit}>
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div className="facebook text-center mr-3">
                                        <i className="fab fa-google"></i>
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
                                    <FormInput  type="text" label="Full Name" value={formData.fullName}  name="fullName" handleChange={(e)=>{handleChange(e)}} placeholder="Enter full name here"/> 
                                </div>
                                <div className="row px-3"> 
                                    <FormInput  type="email" label="Enter Email:" value={formData.emil}  name="email" handleChange={(e)=>{handleChange(e)}} placeholder="Enter a valid email address"/> 
                                </div>
                                <div className="row px-3"> 
                                    <FormInput  type="password" label="Password:" value={formData.password}  name="password" handleChange={(e)=>{handleChange(e)}} placeholder="Enter your password!"/> 
                                </div>
                                <div className="row px-3"> 
                                    <FormInput type="password"  onBlur={handleBlur} value={formData.c_password} name="c_password" label="Confirm Password" handleChange={(e)=>{handleChange(e)}} placeholder="Enter password again"/> 
                                    {renderPasswordConfirmError()}
        
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline"> 
                                        <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> 
                                        <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> 
                                    </div> 
                                    <Link to="/forgot-password" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
                                </div>
                                <div className="row mb-3 px-3"> 
                                    <CustomButton type="submit" >Register</CustomButton> 
                                </div>
                                <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <Link className="text-danger" to="/signin">Log In</Link></small> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   
     </>
    )
}

export default SignUp;