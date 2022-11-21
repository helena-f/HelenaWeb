import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id="about">
      
      <h5>Information</h5>
      <h2>About Me</h2>

      <div className="container about__countainer">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
              {/* <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>6+ years Programming</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Experience</h5>
                <small>6+ years Programming</small>
              </article>
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>6+ years Programming</small>
              </article> */}
            </div>
          <p>
            When I first picked up a BBC micro:bit in 6th grade, methodically learning each function of the board, I knew I loved the problem solving and hands-on learning programming provided.
            Since then, I have led my robotics team from local to international competitions for FIRST Tech Challenge, researched alongside Lawrence Berkeley National Laboratory scientists, 
            and coded many projects of my own. Outside of computer science, I also love figure skating, painting, and playing the cello.  
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About