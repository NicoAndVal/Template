import React from 'react'

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            correo: ''
        }
    }
    render(){
        return(
            <div className='ed-grid'>
                <h1>FORMULARIO {this.props.name}</h1>
                <form>
                    
                    <div className = 'ed-grid m-2'>

                        <div className='form__item'>
                            <label>Nombre Completo</label>
                            <input type='text' onChange = {(e) => this.setState({nombre:e.target.value})} />
                        </div>
                        <div className='form__item'>
                            <label>Correo Electronico</label>
                            <input type='email'  onChange={(e) => this.setState({correo:e.target.value})}/>
                        </div>
                    </div>
                    <div className ='form__item'>
                        <input type='submit' className="button full" value="Enviar"/>
                    </div>
                </form>

                <div>
                    <h2>{ `HOLA: ${this.state.nombre}`}</h2>
                    <h3> {`Tu correo: ${this.state.correo}`}</h3>
                </div>
            </div>
        )
    }
}

export default Form