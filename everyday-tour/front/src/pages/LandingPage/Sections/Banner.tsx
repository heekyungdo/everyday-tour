import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay,Parallax } from 'swiper/modules';
import 타이완 from '../../../assets/images/대만.jpg';
import 나트랑 from '../../../assets/images/나트랑.jpeg';
import 스페인 from '../../../assets/images/스페인.jpeg';
import 시드니 from '../../../assets/images/시드니.jpeg';
import 홍콩 from '../../../assets/images/홍콩.jpeg';
import 후쿠오카 from '../../../assets/images/후쿠오카.jpeg';

const countries = [
    {id:1, country:'타이완', image:타이완, title:'타이완',},
    {id:2, country:'나트랑', image:나트랑, title:'나트랑',},
    {id:3, country:'스페인', image:스페인, title:'스페인',},
    {id:4, country:'시드니', image:시드니, title:'시드니',},
    {id:5, country:'홍콩', image:홍콩, title:'홍콩',},
    {id:6, country:'후쿠오카', image:후쿠오카, title:'후쿠오카',},
]

const Banner = () => {
  return (
    <>
    <SwiperStyle
      pagination={{
        type: 'fraction',
      }}
      loop={true}
    //   navigation={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      parallax={true}
      slidesPerView={1}
      centeredSlides={true}
      autoHeight={true}
      modules={[Pagination, Autoplay, Parallax]}
    >
          {countries.map(country=>(
      <SlideStyle key={country.id}>
        {country.title}
            <img src={country.image} alt={country.country}/>
      </SlideStyle>
        ))}

    </SwiperStyle>
  </>
  )
}

export default Banner

const SwiperStyle = styled(Swiper)`
    width:100%;
`
const SlideStyle = styled(SwiperSlide)`
    // min-height:300px;
    // max-height:500px;
    img{
        height:100%;
        object-fit:cover;
    }
`