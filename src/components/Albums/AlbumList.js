import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import {Button} from '../common';
import firebase from 'firebase';

class AlbumList extends Component {

    state = { albums: []};

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums.map( album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render(){
        return (
            <ScrollView>
                <Button onPress={() => {firebase.auth().signOut()}}>Logout!</Button>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
