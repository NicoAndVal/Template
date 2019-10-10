import React from 'react';
import {NavLink} from 'react-router-dom'

const MainMenu = () =>(
    <>
        <div className = 'main-menu'>
            <ul className = 'main-menu_links'>
                <li className = 'main-menu_item'><NavLink exact to='/' className='main-menu_content' activeClassName='activo'>Home</NavLink></li>
                <li className = 'main-menu_item'><NavLink to='/cursos'  activeClassName='activo'>Cursos</NavLink></li>
                <li className = 'main-menu_item'><NavLink to='/formulario'  activeClassName='activo'>Formulario</NavLink></li>
                <li className = 'main-menu_item'><NavLink to='/usuarios'  activeClassName='activo'>Usuarios</NavLink></li>
            </ul>
        </div>
    </>
)

export default MainMenu;