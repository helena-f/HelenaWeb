import React from 'react'
import './portfolio.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Navigation} from "swiper";

import ART1 from '../../assets/1.jpg'
import ART2 from '../../assets/art/2.jpg'
import ART3 from '../../assets/art/3.jpg'
import ART4 from '../../assets/art/4.jpg'
import ART5 from '../../assets/art/5.jpg'
import ART6 from '../../assets/art/6.jpg'
import ART7 from '../../assets/art/7.jpg'

const data = [
  {
    image: ART1,
    title: 'Dreamer'
  },
  {
    image: ART2,
    title: 'Hands'
  },
  {
    image: ART3,
    title: 'Glass'
  },
  {
    image: ART4,
    title: 'Light'
  },
  {
    image: ART5,
    title: 'Charcoal Model Study'
  },
  {
    image: ART6,
    title: 'Seas'
  },
  {
    image: ART7,
    title: 'Picturesque'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Showcase</h5>
      <h2>Portfolio</h2>
      <h6 id='center'>Swipe</h6>
      <Swiper className="container portfolio__container"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}>
        {
          data.map(({ image, title }, index) => {
            return (
              <SwiperSlide key={index} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image}/>
                </div>
                <h5 className='art__name'>{title}</h5>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio