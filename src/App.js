import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component.jsx';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import NavbarPage from './components/header/Header.component.jsx'
import Footer from './components/footer/Footer.component.jsx';
import SignIn from './pages/signin/SignIn.component';
import SignUp from './pages/signup/SignUp.component';
import {auth,createUserProfileDocument} from './firebase/firebase.util.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action.js';
import {selectCurrentUser} from './redux/user/user.selector.js'
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/CheckOut.component.jsx';
import ContactPage from './pages/contacts/Contact.page'
// import Navbar from './components/header/navbar/Navbar.component';


class App extends React.Component{

    
    unsubscribeFromAuth=null;
    componentDidMount(){
      const {setCurrentUser}=this.props;
     
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) =>{
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            
          });
        }else{
          setCurrentUser(userAuth);
        }
      })
    };

    componentWillUnmount(){
      this.unsubscribeFromAuth=null;
    }

  render(){

    return (
          <>
            {/* <Navbar/> */}
            <NavbarPage/>
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/shop" component={ShopPage} />
              <Route path="/signup" component={SignUp} />
              <Route path="/checkout" component={CheckoutPage} exact/>
              <Route path="/contact" component={ContactPage} exact/>
              <Route  exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />):(<SignIn/>)} />
            </Switch>
            <Footer/>
          </>
    );

  }
 
}

const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser:(user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
