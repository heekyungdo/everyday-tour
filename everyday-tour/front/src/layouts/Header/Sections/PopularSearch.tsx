import React from 'react'
import styled from 'styled-components'
import iconDownArrow from '../../../assets/icons/icon_down_arrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const PopularSearch = () => {
  const searchList = [
    {id:1, name:'나트랑'},
    {id:2, name:'홍콩'},
    {id:3, name:'시드니'},
    {id:4, name:'후쿠오카'},
    {id:5, name:'스페인'}, 
    {id:6, name:'방콩'},
    {id:7, name:'다낭'},
    {id:8, name:'튀르키예'},
    {id:9, name:'대만'},
    {id:10, name:'보홀'},
  ]

  return (
    <PopularSearchWrapper>
      <TitleText>인기 검색어</TitleText>
      <SwiperStyle
      slidesPerView={'auto'}
      centeredSlides={true}
      autoHeight={true}
      direction={'vertical'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
    >
      {searchList.map((place)=>(
      <SlideStyle key={place.id}><span>{place.id}</span>{place.name}</SlideStyle>
      ))}
    </SwiperStyle>
      <img src={iconDownArrow} alt="화살표"/>
    </PopularSearchWrapper>
  )
}

export default PopularSearch

const PopularSearchWrapper = styled.div`
  display:flex;
  align-items:center;
  height:20px;
`
const TitleText = styled.span`
 margin-right:15px;
 color:#888888;
 font-size:14px;
 cursor:pointer;
 &:hover{
  color: #82CBC4;
 }
`

const SwiperStyle = styled(Swiper)`
 margin-right:12px;
 cursor:pointer:
`

const SlideStyle = styled(SwiperSlide)`
 font-size:13px;
 span {
    font-weight:bold;
    margin-right:9px;
 }
`