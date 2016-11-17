import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const firebaseConfig = {
	    apiKey: "AIzaSyCxYECLKDPbpT2569AwaqpkBCP0ifZES4A",
	    authDomain: "learn-firebase-2a6bb.firebaseapp.com",
	    databaseURL: "https://learn-firebase-2a6bb.firebaseio.com",
	    storageBucket: "learn-firebase-2a6bb.appspot.com",
	    messagingSenderId: "990106271007"
	  };
	  firebase.initializeApp(firebaseConfig);
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		)
	}
}

export default App;