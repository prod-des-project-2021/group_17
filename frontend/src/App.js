import React from 'react';
import './App.css';
import SignInScreen from './login/SignIn';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container, ThemeProvider, CssBaseline, Button } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './login/firebaseconfig';
import Theme from './Theme';
import Header from './components/homepage/Header';
import Footer from './components/homepage/Footer';


class App extends React.Component {
	constructor(props) {
		super(props);
		// currentUser wird von Google geliefert
		// apiUser ist der User aus unserer User aus der API
		this.state = { //vgl self in python
			currentUser : null,
			apiUser : null,
			appError: null,
			authError: null,
			authLoading: false,
			newUser: false,
		};
		//initialize firebase if its not already running
		if(!firebase.apps.length)  firebase.initializeApp(firebaseConfig);
		firebase.auth().languageCode = 'de';
		firebase.auth().onAuthStateChanged(this.handleAuthStateChange); //eventhandler für login/logout
	}
  /** Renders the whole app */
	render() {
		const { appError, currentUser, apiUser}= this.state;
		return (

			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Router basename={process.env.PUBLIC_URL}> {/* fügt automatisch die url vor jedem link ein */}
					<Header user={apiUser}/>
					<Container maxWidth='xl'>
						{	
            
							// Is a user signed in?
							currentUser ? //todo: ist user neu?
							!apiUser?<>Loading...</>:
							apiUser.returnIsNewUser() ?
							<>
							<Settings signup={true} currentUser={currentUser} apiUser={apiUser}/>
							</>
							:
								// normal Routes
								<>
									
									<Redirect from='/' to='basesite' />
									<Route exact path='/basesite' component={Redirect} >
										<p>Homepage</p>
										<p>Hello  {currentUser.displayName }</p>
										<p>Database UserID: {apiUser ? apiUser.getID():""}</p>
										<Button onClick={this.handleSignOut}>Logout</Button>
										
									</Route>
									<Route path='/profil'>
									{apiUser?<Profil currentUser={apiUser}/>:null}
									</Route>
									<Route path='/search' >
										{apiUser?<Search currentUser={apiUser}/>:null}
									</Route>
									<Route path='/cart'>
										{apiUser?<Cart currentUser={apiUser}/>:null}
									</Route>
								<Footer />	
								</>
								:
								// else show the sign in page
								<>
									<Redirect to='/index.html' />
									<SignInScreen onNewUser={this.handleNewUser.bind(this)} />
								</>
						}
						<ErrorHandler appError={appError} appErrorMsg={appError ? appError.text:null} />
					</Container>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;

