import React, {Component} from 'react';


class Song extends Component{
	render(){
		return (
			<div className="col s6 m3 card">
				<div>
					<img src={this.props.imagen} className="responsive-img" alt="portada"/>
					<p> tiempo </p>
				</div>
				<div>
					<p className="blue-text"> {this.props.usuario} </p>
					<p> {this.props.name} - {this.props.artista} </p>
					<div>
						Controles de reproducción
					</div>
				</div>
			</div>
		);
	}
}

export default Song;
