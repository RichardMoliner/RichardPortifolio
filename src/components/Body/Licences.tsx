import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Licences.css'

const carouselData = [
    {
      imgSrc: '/assets/ReactJS.png',
      alt: 'React',
    },
    {
      imgSrc: '/assets/Python.png',
      alt: 'Python',
    },
    {
      imgSrc: '/assets/CSharp.png',
      alt: 'C#',
    },
    {
      imgSrc: '/assets/Html.jpeg',
      alt: 'Html',
    },
    {
      imgSrc: '/assets/JavaScript.jpeg',
      alt: 'JavaScript',
    },
    {
      imgSrc: '/assets/Manager.jpeg',
      alt: 'Management',
    },
    {
      imgSrc: '/assets/PowerBI.jpeg',
      alt: 'Microsoft Power BI',
    },
    {
      imgSrc: '/assets/Pythonando.jpeg',
      alt: 'Pythonando Week',
    },
    {
      imgSrc: '/assets/Scrum.jpeg',
      alt: 'Scrum',
    },
    
  ];

  const CenteredCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Box width="50%">
          <Slider {...settings}>
            {carouselData.map((item, index) => (
              <div key={index}>
                <img src={item.imgSrc} alt={item.alt} style={{ width: '100%' }} />
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    );
  };
  
  export default CenteredCarousel;