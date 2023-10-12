import React from 'react'
import detail from '../components/detail';

function Card({name, imgsrc,tel, email}) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <img
            className="circle-img"
            src={imgsrc}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
        <p className="info">{tel}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card