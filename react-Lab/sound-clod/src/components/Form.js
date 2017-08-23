import React, {Component} from 'react';

export default class Form  extends Component{
	constructor(props){
		super(props);

		this.state = {
			song: {}
		};

		this.actualizarEdo = this.actualizarEdo.bind(this);
		this.agregarCancion = this.agregarCancion.bind(this);
	}

	actualizarEdo(e){
		const nuevoValor = e.target.value;
		const propiedad = e.target.dataset.target;//puede ser nombre para data-nombre etc.
		console.log(propiedad);
		let cancion = this.state.song;
		cancion[propiedad] = nuevoValor;
		this.setState({ //se actualiza valor de song
			song: cancion
		});
	}

	agregarCancion(e){
		e.preventDefault();
		const kncion = this.state.song;
		// console.log(kncion);
		this.props.agregar(kncion);
		this.setState({
			song: {
				nombreCancion: ' ',
				artista: ' ',
				img: ' '
			}
		});
	}

	render() {
		return(
			<div className="row">
			    <form className="col s12" onSubmit={this.agregarCancion}>
			      <div className="row">
			        <div className="input-field col s6">
			          <input placeholder="Titulo de la canción" data-target="nombreCancion" type="text" className="validate" value={this.state.song.nombreCancion} onChange={this.actualizarEdo}/>
			        </div>
			        <div className="input-field col s6">
			          <input placeholder="Artista" data-target="artista" type="text" className="validate" value={this.state.song.artista} onChange={this.actualizarEdo}/>
			        </div>
			      </div>
			      <div className="row">
			        <div className="input-field col s12">
			          <input placeholder="URL de la imagen" data-target="img" type="text" className="validate" value={this.state.song.img} onChange={this.actualizarEdo}/>
			        </div>
			      </div>
				   <div className="row">
					   <button className="waves-effect waves-light btn" type="submit" >agregar</button>
				   </div>
			    </form>
			  </div>
		);
	}
}
