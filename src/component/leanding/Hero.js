import React from 'react'
import { Container, Image } from 'react-bootstrap';
import img1 from "../../assets/img/home/hero1.png"
import img2 from "../../assets/img/home/hero2.png"
import img3 from "../../assets/img/home/hero3.jpg"
import img4 from "../../assets/img/home/hero4.png"
import Slider from "react-slick";

const Hero = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true
    };
  return (
    <>
   <section className="hero_section">
   <Container>
   <div className='hero_slider'>
   <Slider {...settings}>
            <div className='hero_item'>
                <Image src={img1} alt='blank' className='hero_img' />
            </div>
            <div className='hero_item'>
                <Image src={img2} alt='blank' className='hero_img' />
            </div>
            <div className='hero_item'>
                <Image src={img3} alt='blank' className='hero_img' />
            </div>
            <div className='hero_item'>
                <Image src={img4} alt='blank' className='hero_img' />
            </div>
         


   </Slider>
   </div>
   </Container>
   </section>
    </>
  )
}

export default Hero