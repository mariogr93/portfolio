import React from 'react';
import CustomButton from './CustomButton.component';
import FormInput from './FormInput.component';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = () => {
        this.setState({ email: "", password: "" });
    }

    // handleSubmit = async event => {
	// 	event.preventDefault();
	// 	const { email, password } = this.state;

	// 	try {
	// 		await auth.signInWithEmailAndPassword(email, password);
	// 		this.setState({ email: "", password: "" });
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
		
    // };
    
    handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value } );
	}; 
    render(){
        return(
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form >
                    <FormInput
                            name='email'
                            type='email'
                            value={this.state.email}
                            handleChange={this.handleChange}
                            label='Email'
                            required
                        />

                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;