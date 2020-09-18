import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Signin extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState( { email: '' , password: ''})
    }

    handleInputChange = event => {
        
        const { value, name } = event.target;
        this.setState( { [name]: value});
        //console.log(this.state);
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
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
                        label = 'password'
                        name="password"
                        handleInputChange={this.handleInputChange} 
                        required
                    />
                    <div className="signin-button-group">
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>

                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn={true}>
                            Sign In with Google
                        </CustomButton>

                    </div>
                </form>
            
            </div>

        )
        
    }
}

export default Signin;