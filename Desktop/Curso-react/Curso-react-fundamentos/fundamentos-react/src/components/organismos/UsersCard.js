import React from 'react'


const UsersCard = ({name,userName,email}) =>(
    <>
    <div className ='card'>
         <span className = 'card-title'>{name}</span>
         <div className='card-teacher'>
             
                  <img src='https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg' alt='profesor' className='card-teacher_img'/>
          <span className='card-teacher_title'>{userName}</span>
         </div>
         <button className='card-button'>{`$ ${email}`}</button>
      </div>  
  
      </>
)

export default UsersCard;

