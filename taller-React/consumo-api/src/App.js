import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import PatitoSerio from './components/PatitoSerio.jsx'
import Pokemon from './components/Pokemon.jsx'

class App extends Component {
	// constructor(){
	// 		super();
	// 		this.state = {//Se declara el estado
	// 			apiResponse: ''
	// 		}
	// }
	//
	// componentWillMount(){
	// 	fetch("http://pokeapi.co/api/v1/pokedex/1")//para GET se deja así, para otro metodo se agrega {method: "tipo de petición"}
	// 	.then((response) => {
	// 		return(response.json())//Se transforma la respuesta de la aipen un json
	// 	})
	// 	.then((objetoJSON) => {//Se actualiza el estado
	// 		// console.log(objetoJSON);
	// 		this.setState({
	// 			apiResponse: objetoJSON
	// 		});
	// 	})
	// 	// .catch()
	// }

	// 2da versión de la api (con pekemon)

	constructor(){
		super();
		this.state = {//Inicialización del estado --> el estado esta disponible para TODAS las funciones del componente
			apiResponse: {
				pokemon : []
			}
		}
	}

	componentDidMount(){//cambió will por did
		fetch("http://pokeapi.co/api/v1/pokedex/1")
		.then( (response) => {
			// console.log(response.json());
			return ( response.json());
		})
		.then( (response) =>{
			console.log(response);
			this.setState({ //---->  ANTES de usar el estado hay que inicializarlo
				apiResponse: response //--> actualiza el estado
			})
		})
	}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React: Patito Serio vs Pokemons</h2>
	  </div>

		  <div>
			  <h1> Quiubo </h1>

			  {/* < PatitoSerio info= {this.state.apiResponse} /> 1ra versión*/}

			  <Pokemon status= {this.state.apiResponse}/> {/* 2da versión  */}
		  </div>

      </div>


    );
  }
}

export default App;
