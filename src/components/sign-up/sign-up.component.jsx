import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName : '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        console.log( this.state);
        if( password !== confirmPassword ){
            alert("Passwords don't match");
            return;
        }
        if( password.length < 6) {
            alert("Passwords should large than six characters")
        }

        try {

            //Creates a new user account associated with the specified email address and password.
            const { user } = await auth.createUserWithEmailAndPassword(
                email, password
            );
            //console.log(user);

            await createUserProfileDocument( user, { displayName });
            
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch( error ) {
            console.error();
        }
        
    }

    handleInputChange = event => {
        
        const { value, name } = event.target;
        this.setState( { [name]: value});
        //console.log(this.state);
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className="title">I do not have an account</h2>
                <span>Register with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        handleInputChange = {this.handleInputChange}
                        value={this.state.displayName}
                        label='display name'
                        required>
                        
                    </FormInput>
                    <FormInput 
                        type='email'
                        name='email'
                        handleInputChange = {this.handleInputChange}
                        value={this.state.email}
                        label='email'
                        required>
                        
                    </FormInput>
                    
                    <FormInput  
                        type="password" 
                        className="form-control"
                        value = {this.state.password}
                        label = 'password should large than six'
                        name="password"
                        handleInputChange={this.handleInputChange} 
                        required
                    />
                    <FormInput  
                        type="password" 
                        className="form-control"
                        value = {this.state.password}
                        label = 'confirm password'
                        name="confirmPassword"
                        handleInputChange={this.handleInputChange} 
                        required
                    />
                    <div className="signin-button-group">
                        <CustomButton type="submit">
                            Register
                        </CustomButton>

                       

                    </div>
                </form>
            
            </div>

        )
        
    }
}

export default SignUp;