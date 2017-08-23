import React, { Component } from 'react';

import Song from '../components/Song';
import Spinner from '../components/Spinner';

const playlist = [
	{
		imgURL: 'https://i1.sndcdn.com/artworks-000158892019-gl0357-t500x500.jpg',
		userName: 'Max Cooper',
		name: 'Raimer',
		artist:'Dead Heat'
	},
	{
		imgURL: 'https://i1.sndcdn.com/artworks-000137088937-wb2b5g-t500x500.jpg',
		userName: 'dhfru',
		name: 'Lost',
		artist:'Christian Loffler'
	},
	{
		imgURL: 'https://i1.sndcdn.com/artworks-000217943853-q1yvok-t500x500.jpg',
		userName: 'Genesis',
		name: 'Atlantean',
		artist:'Cureguard'
	},
	{
		imgURL: 'https://i1.sndcdn.com/artworks-000198251892-hdc84f-t500x500.jpg',
		userName: 'Luio',
		name: 'Divine',
		artist:'Saint'
	}
];

export default class SongRow extends Component {
	constructor(props){
		super(props);//INVOCA AL CONSTRUCTOR DE LA CLASE PADRE (Component)

		this.state = {//inicialización del estado
			playlist : [], // el estado inicial es siempre del mismo tipo de dato que usemos pero vacio
			cargando: true
		};

		console.log('Constructor');
	}

	componentWillMount(){
			console.log('Will mount');
	}

	componentDidMount(){
		console.log('Did Mount');

		setTimeout(() => {//ventaja arrowFunction, el scope es diferente this hace referencia al componente
			this.setState({
				playlist: playlist,
				cargando: false
			});
		}, 3000);
	}

	render () {
		console.log('Render');

			return(
				<div className="row">
					<h2 className="container purple-text center"> Soundcloud Playlist </h2>

					{/* {this.state.cargando ? <p> Cargando... </p> : null } se puede usar operador ternario en vez de el && */}
					{/* {this.state.cargando && <Spinner /> } */}
					{/* <Song />
					<Song />
					<Song />
					<Song /> */}
					{this.props.playlist.map( (song, i) => { //se cambia playlist por this.state.playlist para iterar sobre un estado
						return <Song key={i}
							imagen={song.img}
							usuario={' '}
							name={song.nombreCancion}
							artista={song.artista}
						/>
					})}

				</div>
			);
	}
}
