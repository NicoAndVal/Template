import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFetch from '../CustomHooks/useFetch'
import useCounter from '../CustomHooks/useCount'


const Course = ({ match }) => {

  const [course, setCourse] = useState({})
  const [comentario, setComentario] = useState('Sin Comentarios')

  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/NicoAndVal/json-db/cursos/${match.params.id}`)
      .then(res => setCourse(res.data))

  }, [])

  const users = useFetch('https://jsonplaceholder.typicode.com/users', [])

  const contador = useCounter()

  const miComentario = (e) => {
    setComentario(e.target.value)
  }

  return (
    <div className="ed-grid m-grid-3">
      {
        course ?
          <div className='ed-grid'>
            <div className='l-block'>
              <h1 className='m-cols-3' >{course.title}</h1>
              <img className="m-cols-1" src={course.image} alt={course.title} />
              <p className="m-cols-2">PRECIO: {course.price}</p>
            </div>
            <div className='ed-grid'>
              <h3>ESCRIBE TU COMENTARIO</h3>
              <input type='text' placeholder='escribe tu comentario' onChange={miComentario.bind(this)} />
              <p>{comentario}</p>
            </div>
            <div className='ed-grid'>
              <h1>USUARIOS</h1>
              <ul>
                {users.loading && <p>Cargando...</p>}
                {users.data && users.data.map(user => (

                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            </div>
            <div className= 'ed-grid'>
              <h2>Contador</h2>
                <p>{contador.count}</p>
                <button className='button' onClick ={contador.incrementar}>INCREMENTAR</button>
                <button className='button' onClick ={contador.decrementar}>DISMINUIR</button>
              
            </div>
          </div>
          
          :
          <h1>EL CURSO NO EXISTE</h1>
      }
    </div>


  )

}

export default Course