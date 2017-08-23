import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Hola, Chau} from './App'; -> al hacer esto midificar render < +++/>
import App from './App';
// import Song from './components/Song';-- al agregar SongRow se comenta esta linea
import SongRow from './containers/SongRow';
// al importar un archivo .js en otro no es necesario coloicar la extensión --> './App' = './App.js'
import registerServiceWorker from './registerServiceWorker';//permite usar la app sin internet

ReactDOM.render(
	<App />,
	document.getElementById('root')
); //render recibe 2 para metros el componente &
registerServiceWorker();
