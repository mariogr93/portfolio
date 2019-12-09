import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderBar from './components/Main/Header-Bar.component';
import { auth, createUserProfile } from './firebase/Firebase-connection';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<HeaderBar currentUser={this.state.currentUser} />
				<HomePage />
			</div>
		);
	}
}

export default App;
