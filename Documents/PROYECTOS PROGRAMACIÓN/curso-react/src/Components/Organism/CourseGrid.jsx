import React from 'react'
import Curso from '../Molecules/CourseCard'
import withLoader from '../HOC/withLoader'

const CourseGrid = ({courses}) =>(
    <div className = 'ed-grid m-grid-4' >
              {
              courses.map(curso =>
                <Curso
                    key = {curso.id}
                    id = {curso.id}
                    title = {curso.title}
                    image = {curso.image}
                    price = {curso.price}
                
                />
            )
              }
          </div>

)


export default withLoader("courses",CourseGrid)