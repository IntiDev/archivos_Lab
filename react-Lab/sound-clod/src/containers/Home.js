import React, { Component } from 'react';


import Form from '../components/Form';
import SongRow from './SongRow';

class Home extends Component {

	constructor(props){
		super(props);

		this.state = {
			playlist: []
		};

		this.agregandoSongLista = this.agregandoSongLista.bind(this);
	}

	agregandoSongLista(rola){
		let listaCanciones = this.state.playlist;
		listaCanciones.push(rola);
		this.setState({
			playlist: listaCanciones
		});
		localStorage.setItem('playLi', JSON.stringify(listaCanciones));
	}

	componentDidMount(){
		let playListString = localStorage.getItem('playLi');
		const playL = JSON.parse(playListString);
		this.setState({
			playL: playListString || []
		});

		console.log(playL);
	}
  render() {
    return (

	<div className="container">
		<Form agregar={this.agregandoSongLista}/>
		<SongRow playlist={this.state.playlist}/>
	</div>
    );
  }
}

export default Home;
