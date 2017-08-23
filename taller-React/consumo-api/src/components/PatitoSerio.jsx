import React from 'react'

class PatitoSerio extends React.Component{

	render(){
		return (
			// <div> Cuack </div>
			<div> { this.props.info.name } </div>
		);
	}
}

export default PatitoSerio;
//endpoint punto desde el que se consume la api
