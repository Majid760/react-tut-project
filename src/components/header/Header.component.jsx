import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Header.style.css';
import {auth} from '../../firebase/firebase.util.js';

import CartIcon from '../cart-icon/Cart-icon.component.jsx';
import CartDropDown from '../cart-dropdown/CartDropDown.component.jsx';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors.js';
import {selectCurrentUser} from '../../redux/user/user.selector.js';

const NavbarPage=({currentUser,hidden,itemCount})=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2  sticky-top rounded-bottom">
        <Link className="navbar-brand" to="/">Ecom</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shop">shop</Link>
            </li>
           
            <li className="nav-item">
                <Link className="nav-link " to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/contact">Contacts</Link>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">Search</button>
            <ul className="navbar-nav mr-auto">
                <li>
                    <CartIcon/>
                    <span className="badge badge-pill badge-success position-absolute " style={{top:"20px",right:"80px"}}>{itemCount}</span>
                    {
                        hidden? null : <CartDropDown/>
                    }
                      
                </li>
               
                    <li className="nav-item">
                        {
                            currentUser ?
                            (
                                <Link className="option" to="" onClick={()=>auth.signOut()}>
                                    <i className="fas fa-user-circle text-success fa-2x"></i>
                                </Link>
                            ) 
                            :(
                                <Link className="my-2 my-sm-0" to="/signin">
                                
                                        <i className="fas fa-sign-in-alt text-success text-lg fa-2x"></i>
                                
                                </Link>
                            )
                            
                        }
                        
                        
                    </li>
                </ul>
            </form>
           
            </div>
        </nav>
    );
  }

 

  const mapStateToProps=createStructuredSelector({
    
      currentUser:selectCurrentUser,
      hidden:selectCartHidden,
      itemCount:selectCartItemsCount,
      }
  )
  
export default connect(mapStateToProps)(NavbarPage);