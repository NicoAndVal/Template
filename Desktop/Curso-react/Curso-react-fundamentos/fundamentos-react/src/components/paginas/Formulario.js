import React from 'react'

class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombre:'',
            correo: '',
            fecha: new Date()
        }
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarHora = this.cambiarHora.bind(this);
    }


    cambiarHora(){
        this.setState ({
            fecha:new Date()
        })
    }
    cambiarNombre (e){
        this.setState({
            nombre:e.target.value
        })
    }

    cambiarCorreo (e){
        this.setState({
            correo:e.target.value
        })
    }

    componentDidMount(){
        this.Intervalo = setInterval(()=>{
            this.cambiarHora()
        },1000)
    }

    render(){
        return(
            <div>
            <div className='formulario'>
                <h1>{this.props.title}</h1>
                <h3>La hora es {this.state.fecha.toLocaleTimeString()}</h3>
                <label>Nombre completo</label>
                <input type='text' onChange={this.cambiarNombre}/>
                <label>Correo Electronico</label>
                <input type='text' onChange={this.cambiarCorreo}/>

                <button className='formulario-boton' value='enviar'>Enviar</button>

            </div>

            <h2>Nombre: {this.state.nombre}</h2>
            <span>Correo: {this.state.correo}</span>
            </div>
        )
    }
}

export default Formulario;