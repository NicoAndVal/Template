import React from 'react'


function withLogin(WrappedComponent){
    return class WithLoginComponent extends React.Component{
    
        constructor(props){
            super(props)
            this.state = {loggued : false}
            this.verifyUserLogin = this.verifyUserLogin.bind(this)
        }

        verifyUserLogin(){
            setTimeout(() =>{
                const loggued = Math.round(Math.random())
                this.setState({loggued: loggued ===1 })
            })

        }

        componentDidMount(){
            this.verifyUserLogin()
        }
    
        render(){
            return(
                <WrappedComponent {...this.props}
                    loggued = {this.state.loggued}
                />
            )
        }
    }

}

//...this.props = Nos permite traspasar los props del componente que estamos recibiendo 
//como parametro, pasarselo al compnente que queremos renderizar

export default withLogin