import React from 'react';
import '../styles/style.scss';
import Courses from './Pages/Courses';
import CourseCard from './Pages/Course'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organism/MainMenu';
import Form from './Pages/Form';
import Home from './Pages/Home';
import Private from './Pages/Private'

const App = () => (
  (
    <Router>
      <MainMenu/>
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/cursos/:id'  component = {CourseCard}/>
        <Route path = '/cursos'  component = {Courses}/>
        <Route path = '/formulario'  component = {() =><Form name ='Ed team'/>}/>
        <Route path = '/privado'  component = {Private}/>
        <Route component = {() =>
          <div className = 'ed-grid'>
            <h1>ERROR 404</h1>
            <h3>PÁGINA NO ENCONTRADA</h3>
          </div>
        } />

      </Switch>

    </Router>


  )
    )
    
    
export default App