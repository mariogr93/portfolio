import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../../components/Main/Main.component';
import About from '../../components/Main/About.component';
import Portfolio from '../../components/Main/Portfolio.component';
import SignInSignUp from '../SignIn-SignUp/SignIn-SignUp-Page';
import ErrorPath from '../../components/Main/Error-Path';


const HomePage = () => (
	<div className='homepage'>
		<Switch>
			<Route exact path='/' component={Main} />
			<Route exact path='/about' component={About} />
			<Route exact path='/portfolio' component={Portfolio} />
			<Route exact path='/signin' component={SignInSignUp} />
			<Route component={ErrorPath} />
		</Switch>
	</div>
);

export default HomePage;
