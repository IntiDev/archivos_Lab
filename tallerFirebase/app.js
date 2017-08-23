console.log("Firebase conectado");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCPoyDUrjUJZSrPsLTnkbZmptJk6ML4FO4",
  authDomain: "introfirebase-64361.firebaseapp.com",
  databaseURL: "https://introfirebase-64361.firebaseio.com",
  projectId: "introfirebase-64361",
  storageBucket: "introfirebase-64361.appspot.com",//ubicación de la carpeta en la que se guardan los archivoa a utilizar
  messagingSenderId: "183290873773"
};

firebase.initializeApp(config);

var objDB = {
	usuarios: []
};
// var $formulario = $('#')

var formulario = document.getElementById('crear-usuario');

formulario.addEventListener('submit', function (e) {
	e.preventDefault();
	var $nombre = $('#name').val();
	var $correo = $('#email').val();
	var $contrasenia = $('#password').val();

	// var objeto  = {
	// 	usuarios:[{
	// 		nombre: $nombre,
	// 		correo: $correo,
	// 		contrasenia: $contrasenia
	// 	}]
	// };

	objDB.usuarios.push({
		nombre: $nombre,
		correo: $correo,
		contrasenia: $contrasenia
	});

	guardarDatos(objDB);//se cambia uausrio por el objDB
});


// Get a reference to the database service
  var database = firebase.database();

function guardarDatos(usuarios) {//se cambia usaior por usuarios
	database.ref('/').set(usuarios);// se cambia /usuarios por / (rutaprincipal)
}

function mostrarUsuarios(usuarios) {
	document.getElementById('listaUsuarios').innerHTML = '';//limpia el elemento html para evitar que se dupliquen los datos
	usuarios.forEach(function (usuario) {
		var div = document.createElement('div');
		var h5 = document.createElement('h5');
		var p = document.createElement('p');

		h5.textContent = usuario.nombre;
		p.innerHTML = '<strong> Correo: </strong>' + usuario.correo;

		div.appendChild(h5);
		div.appendChild(p);

		document.getElementById('listaUsuarios').appendChild(div);
	});
}
//Guardar en BD: usar el método .set() -> pasar los objetos
// ****** MANTENER ESTANDAR "" O '' no AMBOS
// database.ref('/usuarios').set({ --> se cambia por función guardarDatos(); --> sobre escribe los datos
//   nombre: 'Inti',
//   correo: 'correoqdominio.com',
//   contrasenia: '1234'
// }); //todo se guarda en la ruta /usuarios(tabla)

//*******se cambia por funcion mostrarUsuarios******
// Leer datos : usar método .on('value') -> escuchar evento value
database.ref('/usuarios').on('value', function (snapshot) { //snapshot -> captura de datos en el último momento solicitado
	var usuario = snapshot.val();//regresa los datos
	// console.log(usuario);
	mostrarUsuarios(usuario);
});
