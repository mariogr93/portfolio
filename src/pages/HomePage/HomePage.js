import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../../components/Main/Main.component';
import About from '../../components/Main/About.component';
import Portfolio from '../../components/Main/Portfolio.component';
import SignIn from '../../components/Main/Sign-in.component';

const HomePage = () => (
	<div className='homepage'>
		<Switch>
			<Route exact path='/' component={Main} />
			<Route path='/about' component={About} />
			<Route exact path='/portfolio' component={Portfolio} />
			<Route exact path='/signin' component={SignIn} />
		</Switch>
	</div>
);

export default HomePage;
