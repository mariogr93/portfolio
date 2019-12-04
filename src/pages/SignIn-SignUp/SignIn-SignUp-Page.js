import React from 'react';
import SignUp from '../../components/Main/Sign-up.component';
import SignIn from '../../components/Main/Sign-in.component';

class SignInSignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            SignUpOpen: false
        };
    }
    
    showSignUp=()=>{
        this.setState({SignUpOpen:!this.state.SignUpOpen})
    }
    render(){
        return(
            <div>
                <div>
                    <div onClick={this.showSignUp}>Sing In</div>
                    <div onClick={this.showSignUp}>Sing Up</div> 
                </div>
                <div>
                    {this.state.SignUpOpen? <SignUp/> : <SignIn/>}
                </div>
            </div>
        )
    }
}

export default SignInSignUp;