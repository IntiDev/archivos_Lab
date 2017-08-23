import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component{
	render() {
		return (
			<div>
				<h3 className="center purple-text"> ¡¡¡¡Bienvenid@s!!!</h3>
				<Link  to="/home"> Ir a página principal </Link>
				  {/* LINK solo para moverse dentro de la misma aplicación */}
			</div>
		);
	}
}
