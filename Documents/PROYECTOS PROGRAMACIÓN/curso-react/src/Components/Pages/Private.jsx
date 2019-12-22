import React from 'react'
import withLogin from '../HOC/withLogin'

const Private = (props) =>(

    <div>
        {props.loggued? <h1>PAGINA PRIVADA</h1>:<h1>NO HAY LOGIN</h1> }
        
    </div>

)

export default withLogin(Private)