import React from 'react'
import './portfolio.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Navigation} from "swiper";

import ART0 from '../../assets/art/0.jpg'
import ART1 from '../../assets/art/1.jpg'
import ART2 from '../../assets/art/2.jpg'
import ART3 from '../../assets/art/3.jpg'
import ART4 from '../../assets/art/4.jpg'
import ART5 from '../../assets/art/5.jpg'
import ART6 from '../../assets/art/6.jpg'
import ART7 from '../../assets/art/7.jpg'

const data = [
  {
    image: ART0,
    title: 'Growth',
    desc: '20th District PTA Award Winner; Digital'
  },
  {
    image: ART1,
    title: 'Dreamer',
    desc: 'Oil paint on Canvas'
  },
  {
    image: ART2,
    title: 'Hands',
    desc: 'Acrylic on Cardboard'
  },
  {
    image: ART3,
    title: 'Glass',
    desc: 'Digital'
  },
  {
    image: ART4,
    title: 'Light',
    desc: 'Digital'
  },
  {
    image: ART5,
    title: 'Charcoal Model Study',
    desc: 'Charcoal on Paper'
  },
  {
    image: ART6,
    title: 'Seas',
    desc: 'Oil paint on Canvas'
  },
  {
    image: ART7,
    title: 'Picturesque',
    desc: 'Digital'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Showcase</h5>
      <h2>Art Portfolio</h2>
      <h6 id='center'> <i class="arrow left"></i> Click & Swipe <i class="arrow right"></i></h6>
      <Swiper className="container portfolio__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}>
        {
          data.map(({ image, title , desc}, index) => {
            return (
              <SwiperSlide key={index} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image}/> 
                </div>
                <h5 className='art__name'>{title}</h5>
                <small className='slide__text'>{desc}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio