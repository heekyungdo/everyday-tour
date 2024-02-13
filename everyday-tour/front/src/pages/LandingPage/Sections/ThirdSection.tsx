import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import 다낭 from '../../../assets/images/다낭.jpeg'
import 코타키나발루 from '../../../assets/images/코타키나발루.jpeg'
import 동유럽 from '../../../assets/images/동유럽.jpeg'
import 시드니 from '../../../assets/images/시드니.jpeg'
import 큐슈 from '../../../assets/images/큐슈.jpeg'
import 세부 from '../../../assets/images/세부.jpeg'
import 스페인 from '../../../assets/images/스페인.jpeg';

const countries= [
    {id:1, category:'해외여행', country:'세부', image:세부, title:'[설특가] 세부 제이파크아일랜드 5일', price:957600},
    {id:2, category:'해외여행',  country:'코타키나발루', image:코타키나발루, title:'[설특가] 코타키나발루 수트라하버퍼시픽 5일', price:944000},
    {id:3, category:'해외여행',  country:'동유럽', image:동유럽, title:'[시그니처] 동유럽/발칸 5국9일', price:3399000},
    {id:4, category:'해외여행',  country:'시드니', image:시드니, title:'[선착순할인] 시드니 완전일주 6일', price:1499000},
    {id:5, category:'해외여행',  country:'큐슈', image:큐슈, title:'큐슈 온천 3일[스기노이1박포함]', price:649900},
    {id:6, category:'해외여행',  country:'다낭', image:다낭, title:'[즉시할인] 다낭/호이안/바나힐 5일 [벨메종급]', price:449900},
    {id:7, category:'해외여행',  country:'시드니', image:시드니, title:'[선착순할인] 시드니 완전일주 6일', price:1499000},
    {id:8, category:'해외여행',   country:'코타키나발루', image:코타키나발루, title:'[설특가] 코타키나발루 수트라하버퍼시픽 5일', price:944000}
  ]

  type spainType = {id:number, category:string, country:string, image:string, title:string, hash:string, price:number}
  const spain:spainType =  {id:2, category:'해외여행', country:'스페인', image:스페인, title:'<출발확정> 스페인 항공 일주 9~10일', hash: '#가우디#피카소의 위대한 유산', price:1999000}

  const setComma = (price:number):string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   };

  const ThirdSection = () => {
  return (
    <Wrapper>
        <Devided>
            <div>
            <Title>EVERYDAY Only 추천상품</Title>
            <Content>
                                {/* <LeftSide> */}
                <Swiper
                slidesPerView={2}
                grid={{
                    rows: 2,
                    fill: "row",
                  }}
                // spaceBetween={20}
                 navigation={true}
                 modules={[Grid, Navigation]}>
                    {countries.map(country=>(
                        <SwiperSlide key={country.id}>
                                   <LeftCard> 
                                    <img src={country.image} alt={country.country}/>
                                    <div>
                                        <p>{country.category}</p>
                                        <p>{country.title}</p>
                                        <div><span>{country.price}</span>원{" "}~</div>
                                    </div>
                                     </LeftCard> 
                       </SwiperSlide> 
                    ))}
                  
                </Swiper>
                {/* </LeftSide> */}
                            </Content>
                </div>
        <div>
            <Title>MD의 추천</Title>
            <Content>
                <ImageWrapper>
                <img src={spain.image} alt={spain.country}/>
                </ImageWrapper>
                <TextCard>
                    <Inner>
                <Category>{spain.category}</Category>
                <Country>{spain.title}</Country>
                <Hashtag>{spain.hash}</Hashtag>
                <Price><span>{setComma(spain.price)}</span>원{" "}~</Price>
                </Inner>
                </TextCard>
            </Content>
        </div>
        </Devided>
    </Wrapper>
  )
}

export default ThirdSection

const Wrapper = styled.div`
    max-width: 1280px;
    padding: 150px 50px;
    margin: 0 auto;
`

const Devided = styled.div`
    display:grid;
    column-gap:40px;
    grid-template-columns: repeat(2,1fr);
`

const Title = styled.p`
    font-weight:900;
    font-size:30px;
    margin-bottom:40px;
`

const Content = styled.div`
    padding:70px;
    box-shadow: 0 0 6px #11111126;
    height:834px;
    border-radius:10px;
    background:#ffff;
    cursor:pointer;
    .swiper-grid-column > .swiper-wrapper{
        flex-direction: unset !important;
        }
`

const LeftCard = styled.div`
    img{
        width:180px;
    }
`
const LeftSide = styled.div`
// display:grid;
// grid-column: 1 / 3;
// grid-row: 1 / 3;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(2,1fr);
img{
    width:180px;
}
`

const ImageWrapper = styled.div`
    height:70%;
    img {
        width:100%;
        height:100%;
        border-radius:10px;
    }
`

const TextCard = styled.div`
    margin-top:15px;
`

const Inner = styled.div`
    height: 150px;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
`

const Category = styled.p`
    font-size:18px;
    color:#009C75;
`

const Country = styled.p`
    font-size:24px;
    font-weight:700;
    color:#000000D9;
`

const Hashtag = styled.p`
    font-size: 17px;
    font-weight:500;
    color:#111111;
    width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

const Price = styled.div`
   font-size:22px;
   text-align:right;
    color:#000000D9;
 span {
  font-size:26px;
  font-weight:900;
  color:#000000D9;
 }
`