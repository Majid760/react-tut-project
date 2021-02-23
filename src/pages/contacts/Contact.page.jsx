import React,{ useState} from 'react'
import './contact1.css';
import './contact2.css';

import backgimage from './images/bg-01.jpg';


const ContactPage = ()=>{
    const [formData,setData]=useState({
        fname:' ',
        lname:' ',
        email:' ',
        phone:' ',
        message:' ',
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        console.log(value);
        setData((preVal)=>({
            ...preVal,
            [name]:value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        for (let key in formData) {
            console.log(key, formData[key]);
          }
        console.log('submit sections');
        const arr=Object.entries(formData)
        console.log(arr);
        arr.map(item =>{
            return checkInput(item) ? alert('Please fill'+item+'field'):null
        })
    }

    const checkInput=(field)=>{
        return (field === '' || field === null || field === undefined || field === "") ? true:false;
    }

    return (
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact100-form-title">
                        Send Us A Message
                    </span>

                    <label className="label-input100" htmlFor="first-name">Tell us your name *</label>
                    <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                        <input id="first-name" className="input100" type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First name" />
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
                        <input className="input100" type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last name" />
                        <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" htmlFor="email">Enter your email *</label>
                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <input id="email" className="input100" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Eg. example@email.com" />
                        <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" htmlFor="phone">Enter phone number</label>
                    <div className="wrap-input100">
                        <input id="phone" className="input100" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Eg. +1 800 000000" />
                        <span className="focus-input100"></span>
                    </div>

                    <label className="label-input100" htmlFor="message">Message *</label>
                    <div className="wrap-input100 validate-input" data-validate = "Message is required">
                        <textarea id="message" className="input100" name="message" value={formData.message} onChange={handleChange} placeholder="Write us a message"></textarea>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn">
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="contact100-more flex-col-c-m" style={{backgroundImage:`url(${backgimage})`}}>
                    <div className="flex-w size1 p-b-47">
                        <div className="txt1 p-r-25">
                            <span className="lnr lnr-map-marker"></span>
                        </div>

                        <div className="flex-col size2">
                            <span className="txt1 p-b-20">
                                Address
                            </span>

                            <span className="txt2">
                                Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
                            </span>
                        </div>
                    </div>

                    <div className="dis-flex size1 p-b-47">
                        <div className="txt1 p-r-25">
                            <span className="lnr lnr-phone-handset"></span>
                        </div>

                        <div className="flex-col size2">
                            <span className="txt1 p-b-20">
                                Lets Talk
                            </span>

                            <span className="txt3">
                                +1 800 1236879
                            </span>
                        </div>
                    </div>

                    <div className="dis-flex size1 p-b-47">
                        <div className="txt1 p-r-25">
                            <span className="lnr lnr-envelope"></span>
                        </div>

                        <div className="flex-col size2">
                            <span className="txt1 p-b-20">
                                General Support
                            </span>

                            <span className="txt3">
                                contact@example.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactPage;