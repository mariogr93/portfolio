import React from "react";
import FormInput from "../Main/FormInput.component";
import CustomButton from "../Main/CustomButton.component";
import { auth, signInWithGoogle } from '../../firebase/Firebase-connection';



class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.error(error);
		}
		
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value } );
	};

	render() {
		return (
			<div className='signin'>
				<h2>I already have an account</h2>
				<span>sign with your email and password</span>

				<form onSubmit={this.handleSubmit}>
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
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
					</div>
					
				</form>
			</div>
		);
	}
}

export default SignIn;
