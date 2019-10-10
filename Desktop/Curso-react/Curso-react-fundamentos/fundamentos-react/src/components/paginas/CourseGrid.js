import React from 'react';
import Card from '../organismos/Card';

const cursos = [  
  {
    "id":1,
    "title": 'Adobe xd',
    "image" :'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png',
    "price" : 50
  },
  {
    "id":2,
    "title": 'Google analitycs desde 0',
    "image" :'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/SEO%20Avanzado.png',
    "price" : 100
  },
  {
    "id":3,
    "title" : 'Firebase para la web',
    "image":'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-web.png',
    "price": 30
  },
  {
    "id":4,
    "title":'css desde 0',
    "image": "https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/css-poster_1.jpg?itok=VUK9BKuY",
    "price": 0
  }
]  

const CourseGrid = () => (
    <>
    <div className='conteiner-cards'>
        <div className ='cards'>
          {
            cursos.map(curso =><Card  id = {curso.id} title={curso.title} image = {curso.image} price = {curso.price}/>)
          }
        </div> 
    </div> 
    </>
  
)

export default CourseGrid;