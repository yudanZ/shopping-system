import React from 'react';
import { 
  BrowserRouter as Router,
  Route , 
  Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SigninAndRegisterPage from './pages/signin-register/signin-register.component';

import Header from './components/header/header.component';

/******Google firebase authentication */
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';



class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if( userAuth){
        const userRef = await createUserProfileDocument( userAuth);
        
        userRef.onSnapshot( snapShot => {
          //console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log( this.state);
        });
       
      }

      this.setState({ currentUser: userAuth});
      //createUserProfileDocument(user);

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
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SigninAndRegisterPage} />
          </Switch>
          
        </div>
      </Router>
    );
  }
  
}

export default App;
