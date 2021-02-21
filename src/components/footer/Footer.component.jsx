import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterPage = () => {
  return (
    <div className="bg-blue py-4 rounded-top " style={{backgroundColor:"black"}}>
         <div className="row px-3"> 
         <small className="ml-4 ml-sm-5 mb-2  text-center text-success">Copyright &copy; {new Date().getFullYear()}. All rights reserved.</small>
             <div className="social-contact ml-4 ml-sm-auto"> 
                 <span>
                    <i className="fab fa-facebook-f mr-4 text-sm"></i>
                 </span> 
                 <span>
                        <i className="fab fa-google-plus-g mr-4 text-sm"></i>
                 </span> 
                 <span>
                    <i className="fab fa-linkedin-in  mr-4 text-sm"></i>
                </span> 
                 <span>
                     <i className="fab fa-twitter mr-4 mr-sm-5 text-sm"></i>
                 </span>
                 {/* <FontAwesomeIcon classNameName="mr-4 text-sm" icon={faCoffee} /> 
                 <FontAwesomeIcon classNameName="mr-4 text-sm" icon={faGoogle} />  */}
                 {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}

                 
             </div>
         </div>
     </div>
  );
}

export default FooterPage;