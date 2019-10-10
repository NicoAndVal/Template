import React from 'react';


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
  
  

const Course = ({match}) => {
    
     const cursoActual  = cursos.filter(c => c.id === parseInt(match.params.id))[0]  
    return(
        <div className = 'conteiner-curso'>
            {cursoActual?(
                        <>
                        <h1>Curso : {cursoActual.title}</h1>
                        <img src={cursoActual.image} alt = 'imagen-curso'/>
                        <h3>Precio {cursoActual.price}</h3>
                        </>):
                        (
                            <h1>El curso no existe</h1>
                        ) 
            }
           
        </div>  
    
        )
        
}



export default Course;