import React, {Component} from 'react';
import {View} from 'react-native'
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Message, Spinner} from './common';

class LoginForm extends Component {

    state = {email:'', password:'', loading: false}

    onLoginButtonPress(){
        const {email, password} = this.state;

        this.setState({message: 'Login in...', message_type: 'success', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false
        });
    }

    onLoginFail(){
        this.setState({
            password: '',
            loading: false
        });
    }

    renderSpinner(){
        if(this.state.loading){
            return (
                <Spinner size='large' text={'Logging you in...'}/>
            );
        }
    }

    render(){
        return (
            <View>
                {this.renderSpinner()}
                <Card>
                    <CardSection>
                        <Input placeholder={'john@doe.com'} label="Email" onChangeText={email => this.setState({email})} value={this.state.email} autoCorrect={false}/>
                    </CardSection>

                    <CardSection>
                        <Input secureTextEntry={true} placeholder={'password'} label="Password" onChangeText={password => this.setState({password})} value={this.state.password}/>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onLoginButtonPress.bind(this)}>Login</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default LoginForm;
