import React from 'react';

/****React routing */
import { 
  BrowserRouter as Router,
  Route , 
  Switch,
  Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninAndRegisterPage from './pages/signin-register/signin-register.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

/******Google firebase authentication */
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

/*******Redux actions */
import { setCurrentUser } from './redux/user/user.actions';

/*******Redux reselect */
import { selectCurrentUser} from './redux/user/user.selectors';

//import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import './App.css';



class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if( userAuth){
        const userRef = await createUserProfileDocument( userAuth);
        
        /*******Firebase onSnapshot, whenever data changes will fired this function */
        userRef.onSnapshot( snapShot => {
          //console.log(snapShot.data())
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          //console.log( this.state);
        });
       
      }

      this.props.setCurrentUser(userAuth);
      
      //addCollectionAndDocuments('collections', this.props.collectionsArray.map(({title, items}) => ({title, items})));
      //console.log( user);
    })

  }

  componentWillUnmount(){

    //close subscribe from google
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render = {() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninAndRegisterPage />)} />
          </Switch>
          
        </div>
      </Router>
    );
  }
  
}

// any time the store is updated, mapStateToProps will be called
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
 
})

//dispatch is a function of store, will changing state via an action to the store
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch( setCurrentUser( user))
})
export default connect(mapStateToProps, mapDispatchToProps )(App);
