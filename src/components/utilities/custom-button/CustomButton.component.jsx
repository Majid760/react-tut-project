import React from 'react';




const CustomButton=({children, ...otherProps})=>{
    return(
        <>  
            <button className="btn btn-blue text-center" >{children}</button>
        </>

    )
}

export default CustomButton;