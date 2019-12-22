import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const CourseCard = ({id,image,title,price}) =>(
    (
        <article className="card">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl" key = {id}>
                <Link to={`/cursos/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                   {title}
                </h3>
                <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
                </div>
            </div>
        </article>
    )
)


CourseCard.prototype ={
    title : PropTypes.String,
    price : PropTypes.String,
    image : PropTypes.String
}

CourseCard.defaultProps = {
    title : 'No hay titulo',
    price : 'No hay precio',
    image : "https://2.bp.blogspot.com/-eXwVHV7P_30/XDQIbR_2-yI/AAAAAAAAdCE/4hOAw2cARlUdkxTe3cV7NZnlOmSWuWYfwCLcBGAs/s1600/liderazgo%2Beducativo%2Bcurso%2Bonline%2Bgratis.jpg"
}
    
export default CourseCard