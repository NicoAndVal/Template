import React, {Component} from 'react'
import Curso from '../Molecules/CourseCard';
import axios from 'axios'
import CourseGrid from '../Organism/CourseGrid';


class Courses extends Component{
    constructor(props){
      super(props)
      this.state = {courses: []}
    }

    componentDidMount(){
      axios.get('https://my-json-server.typicode.com/NicoAndVal/json-db/cursos')
      .then(res => {
        console.log(res)
        this.setState({
          courses: res.data
        })
      })
    }

    render(){

      const {courses} = this.state

        return <CourseGrid courses = {courses}/>
    }
}

  export default  Courses