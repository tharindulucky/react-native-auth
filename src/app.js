import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, Message, CardSection} from './components/common';
import LoginForm from './components/LoginForm';
import AlbumList from './components/Albums/AlbumList'

class App extends Component {

    state = {loggedIn: null, message_type: null, message: null};

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBwRvM_Zv-_thbdHjWoVvxzGSALBIZFWkg",
            authDomain: "auth-react-native-745b0.firebaseapp.com",
            databaseURL: "https://auth-react-native-745b0.firebaseio.com",
            projectId: "auth-react-native-745b0",
            storageBucket: "auth-react-native-745b0.appspot.com",
            messagingSenderId: "936320753782",
            appId: "1:936320753782:web:2f43c20ec920b5503fff57",
            measurementId: "G-MVSKEQX5SG"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true, message: 'Login Successful', message_type: 'success'});
            }else{
                this.setState({loggedIn: false, message: 'Authentication Failed!', message_type: 'error'});
            }
        });
    }


    renderContent(){
        switch (this.state.loggedIn) {
            case true:
                return (
                    <AlbumList/>
                );
            case false:
                return (
                    <LoginForm/>
                );
            default:
                return (
                    <Spinner size='large' text={'Please wait...'}/>
                );
        }
    }


    render() {
        return (
          <View>
            <Header headerText={"Authentication"}/>
            <Message type={this.state.message_type} message={this.state.message}/>
            {this.renderContent()}
          </View>
        );
  }
}

export default App;
