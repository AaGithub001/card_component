import React from 'react'
import Name from './Name'
import Profile from './Profile'
import Phone from './Phone'
import Email from './Email'

const Card = ({name, img, tel, email}) => {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <div className="card">
      <div className="top">
        
        <Name 
        a ={name}  />
        <Profile
        p ={img}
        />
      </div>
      <div className="bottom">
        <Phone
        no= {tel}/>
        <Email
        e = {email}/>
      </div>
    </div>
  </div>
  )
}

export default Card