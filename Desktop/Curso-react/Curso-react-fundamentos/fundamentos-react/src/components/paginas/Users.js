import React from 'react'
import UsersCard from '../organismos/UsersCard'


class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users', {method:'GET'})
        .then(response => response.json())
        .then(response2 =>{
            this.setState({
                users: response2
            })
        })
    }

    render(){
        const {users} = this.state;
        return(
            <div>
                <h1>Usuarios</h1>
                <div>
                    {
                        users.map(u =><UsersCard 
                            key={u.id}
                            name = {u.name}
                            userName = {u.UserName}
                            email = {u.email}
                            />)
                    }
                </div>

            </div>
        )
    }
}

export default Users;