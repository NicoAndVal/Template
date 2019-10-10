import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Card = ({id,title,image,price}) =>(
    <>
  <div className ='card'>
       <Link to={`/cursos/${id}`}>
        <img className='card-poster' src={image} alt={title}/>
        </Link>
    
       
       <span className = 'card-title'>{title}</span>
       <div className='card-teacher'>
           
                <img src='https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg' alt='profesor' className='card-teacher_img'/>
        <span className='card-teacher_title'>Alexys Lozada</span>
       </div>
       <button className='card-button'>{`$ ${price}`}</button>
    </div>  

    </>
)

Card.propTypes ={
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
}

Card.defaultProps = {
    title: 'No hay curso',
    image: 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/aws-iv.jpg?itok=08OK4f5U',
    price: '--'
}


export default Card;