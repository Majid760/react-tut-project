import React from 'react';


const FormInput=({label,name,type,placeholder,handleChange, ...otherProps})=>{
    return (
        <>
            <label className="mb-1">
                <h6 className="mb-0 text-sm">{label}</h6>
            </label> 
            <input className="mb-4" placeholder={placeholder} type={type} name={name} onChange={(e)=>{handleChange(e)}}  defaultValue=""   required/>
        </>
    )
}

export default FormInput;