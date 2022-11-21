import React from 'react'
import './header.css'
import ME from '../../assets/me.jpeg'
 
const Header = () => {
  return (
        <header>
            <div className='container header__container'>
                <h5>Hi! I'm</h5>
                <h1>Helena Fu</h1>
                <h5 className='text-light'>Senior at Carlmont High School</h5>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>
    )
}

export default Header