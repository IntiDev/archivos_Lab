import React from 'react';

class Pokemon extends React.Component{

	// Se mueve constructor y componentWillMount al archivo App.js

	render(){
		// let arregloElementos = this.props.pokeInfo
		// if(arregloElementos){
		// 	var nuevoArreglo = arregloElementos.map((nombrePokemon) => {
		// 			return <div> { nombrePokemon.name } </div>;
		// 		});
		// }
		let pokeStatus = this.props.estatus.pokemon.map((pokemon) => {
			return <div> {pokemon.name} </div>
		})

		return (
			<div>
				<h1>{  pokeStatus }</h1>
			</div>
		);
	}
}

export default Pokemon;
