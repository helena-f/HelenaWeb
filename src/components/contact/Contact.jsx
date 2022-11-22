import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='center'>
        <div className="container experience__container">
          <div className="experience__frontend">
            <div className="experience__content">
              <article className='experience__details'>
                <div>
                  <h4>Linkeden</h4>
                  <a href="https://www.linkedin.com/in/helena-fu-162764243/" className='text-light'>Helena Fu</a>
                </div>

              </article>
              <article className='experience__details'>
                <div>
                  <h4>Email</h4>
                  <small className='text-light'>helenafu0705@gmail.com</small>
                </div>

              </article>

            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Contact