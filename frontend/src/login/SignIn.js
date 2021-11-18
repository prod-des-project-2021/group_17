// Import FirebaseAuth and firebase.
import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';



export class SignInScreen extends Component {

   
  render() {
    const { onNewUser } = this.props
     // Configure FirebaseUI.
   const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Email as auth providers.

    //TODO: SignInSucessUrl entfernen, redirect beim sign in entfernen
    //signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        var user = authResult.user;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        if(isNewUser){
          onNewUser(user); //Ruft die Logik für neue User auf 
        }
        //handleSignIn(authResult)
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect
        // automatically or whether we leave that to developer to handle.
        return false;
      }, 
    }
  };
    return (
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}

export default SignInScreen