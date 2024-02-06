import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 다낭 from '../../../assets/images/다낭.jpeg'
import 코타키나발루 from '../../../assets/images/코타키나발루.jpeg'
import 동유럽 from '../../../assets/images/동유럽.jpeg'
import 시드니 from '../../../assets/images/시드니.jpeg'
import 큐슈 from '../../../assets/images/큐슈.jpeg'
import 세부 from '../../../assets/images/세부.jpeg'

const countries = [
  {id:1, category:'해외여행', country:'세부', image:세부, title:'[설특가] 세부 제이파크아일랜드 5일', hash:'#프리미엄워터파크#스위트룸#다이빙강습#자유일정', price:957600},
  {id:2, category:'해외여행',  country:'코타키나발루', image:코타키나발루, title:'[설특가] 코타키나발루 수트라하버퍼시픽 5일', hash: '#가서빙#호핑투어#씨티투어#선셋나이트투어', price:944000},
  {id:3, category:'해외여행',  country:'동유럽', image:동유럽, title:'[시그니처] 동유럽/발칸 5국9일', hash: '#노팁#노쇼핑#노옵션#유럽2대야경', price:3399000},
  {id:4, category:'해외여행',  country:'시드니', image:시드니, title:'[선착순할인] 시드니 완전일주 6일', hash: '#아시아나항공#4성호텔#포트스테판#돌핀크루즈', price:1499000},
  {id:5, category:'해외여행',  country:'큐슈', image:큐슈, title:'큐슈 온천 3일[스기노이1박포함]', hash: '#스기노이#뷔페식#노천온천#가족여행', price:649900},
  {id:6, category:'해외여행',  country:'다낭', image:다낭, title:'[즉시할인] 다낭/호이안/바나힐 5일 [벨메종급]', hash: '#즉시할인#얼리버드#미케비치#가족여행', price:449900},
  {id:7, category:'해외여행',  country:'시드니', image:시드니, title:'[선착순할인] 시드니 완전일주 6일', hash: '#아시아나항공#4성호텔#포트스테판#돌핀크루즈', price:1499000},
  {id:8, category:'해외여행',   country:'코타키나발루', image:코타키나발루, title:'[설특가] 코타키나발루 수트라하버퍼시픽 5일', hash: '#가서빙#호핑투어#씨티투어#선셋나이트투어', price:944000}
]

const setComma = (price:number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 };
 
const RecommenProduct = () => {
  const swiperSlide = useSwiperSlide();

  return (
    <Wrapper>
        <Title>모두의 추천상품</Title>
        <div className="swiper-prev" />
        <SwiperStyle
      spaceBetween={10}
      slidesPerView={2.5}
      navigation={true}
      modules={[Navigation]}
    >
      <ProductList>
      {countries.map(country=>(
      <SwiperSlide key={country.id}>
    <ImageCard>
      <Image>
        <img src={country.image} alt={country.country}/>
      </Image>
      <TextCard>
        <TextInner>
                    <Category>{country.category}</Category>
                    <ProductTitle>{country.title}</ProductTitle>
                    <HashTag>{country.hash}</HashTag>
                    <Price><span>{setComma(country.price)}</span>원{" "}~</Price>
                    </TextInner>
                  </TextCard>
    </ImageCard>
      </SwiperSlide>
      ))}
      </ProductList>
      <div className="swiper-next" />
    </SwiperStyle>
    </Wrapper>
  )
}

export default RecommenProduct

const Wrapper = styled.div`
max-width: 1280px;
padding: 150px 50px;
margin: 0 auto;
`
const Title = styled.p`
    font-weight:900;
    font-size:30px;
`

const SwiperStyle = styled(Swiper)`
 padding:0 5px; 
 .swiper-button-next {
  border:1px solid #888888;
  background:#ffff;
  color:#888888;
  padding: 8px 13px!important;
  width:unset;
  height:unset;
  &:after{
      font-size:18px;
  }
 }
 .swiper-button-prev {
  border:1px solid #888888;
  background:#ffff;
  color:#888888;
  padding: 8px 13px!important;
  width:unset;
  height:unset;
  &:after{
      font-size:18px;
  }
}
`
const ProductList = styled.div`
display:flex;
column-gap:30px;
margin-top:100px;
`

const ImageCard = styled.div`
margin-top:30px;
cursor:pointer;
`

const Image = styled.div`
   img {
    border-radius:10px 10px 0 0;
    width:450px;
    min-height:260px;
    max-height:260px;
    object-fit:cover;
   }
`

const TextCard = styled.div`
   width:450px;
   min-height:200px;
   background:#ffff;
   border: 0 solid #e5e7eb;
   border-radius:0 0 10px 10px;
   box-shadow:0 0 10px #11111119;
   padding:28px;
   margin-bottom:10px;
`

const TextInner = styled.div`
 height: 150px;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
`

const Category = styled.p`
  font-size:18px;
   color:#009C75;
   text-align:left;
`

const ProductTitle = styled.p`
  font-size:22px;
  font-weight:700;
  color:#000000D9;
`

const HashTag = styled.p`
  font-size: 17px;
  color:#888888;
  width: 250px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const Price = styled.div`
   font-size:20px;
   text-align:right;
 span {
  font-size:22px;
  font-weight:900;
  color:#000000D9;
 }
`