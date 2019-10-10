import React from 'react';
import '../styles/styles.scss'
import CourseGrid from './paginas/CourseGrid';
import Formulario from './paginas/Formulario'
import Banner from './moleculas/Banner';
import Course from './paginas/Course';
import MainMenu from './templates/MainMenu';
import Users from './paginas/Users';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () =>(
 
  <Router>
      <MainMenu/>
    <Switch>
        
        <Route path ='/' exact component = {Banner}/>
        <Route path ='/cursos/:id' exact component = {Course}/>
        <Route path ='/cursos' exact component = {CourseGrid}/>
        <Route path ='/formulario' exact component = {() =><Formulario title ='Formulario de contacto Router'/>}/>
        <Route path ='/usuarios' exact component = {Users}/>

        <Route component = {() =>(

          <h1>Pagina no encontrada, error 404</h1>
        )
        }/>
    </Switch>
  </Router>
)
export default App;
