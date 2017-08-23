import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css'; ----> Se comenta al agregar form y songrow

import Form from './components/Form';
import SongRow from './containers/SongRow';
// export class Hola extends React.Component{
// 	render(){
// 		return (
// 			<div>
// 				<p> Hola </p>
// 			</div>
// 		);
// 	}
// }
//
// export class Chau extends React.Component{
// 	render(){
// 		return (
// 			<div>
// 				<p> Bye! </p>
// 			</div>
// 		);
// 	}
// }

class App extends Component {

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
	}
  render() {
    return (
    //   <div className="App">
    //     <div className="App-header">
    //        <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
	//   	</p> ----------> se comenta al agregar form y songrow */}
	//
	//   </div>

	<div className="container">
		<Form agregar={this.agregandoSongLista}/>
		<SongRow playlist={this.state.playlist}/>
	</div>
    );
  }
}

//export default {Hola, Chau};//Al hacer esto se modifica la linea 4 de index.js
export default App;
