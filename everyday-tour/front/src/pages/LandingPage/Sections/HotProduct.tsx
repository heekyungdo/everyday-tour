import React from 'react'
import styled from 'styled-components'
import 나트랑 from '../../../assets/images/나트랑.jpeg';
import 홍콩 from '../../../assets/images/홍콩.jpeg';
import 스페인 from '../../../assets/images/스페인.jpeg';
// import {isComma} from '../../../utils/common.js';

const countries = [
  {id:1, country:'나트랑', image:나트랑, title:'나트랑+달랏 4/5일', hash:'#동양의 나폴리#나트랑#달랏', price:399900},
  {id:2, country:'스페인', image:스페인, title:'스페인 | 포르투갈 일주', hash: '#가우디#피카소의 위대한 유산', price:1999000},
  {id:3, country:'홍콩', image:홍콩, title:'[한번에 두곳을]마카오+홍콩 4/5일', hash: '#빅토리아피크 야경#마카오 세계문화 여행', price:649900},
]

const setComma = (price:number) => {
 return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const HotProduct = () => {
  return (
    <HotProductWrapper>
      <InnerContent>
      <Title>지금 주목할 여행상품</Title>
      <ProductList>
      {countries.map(country=>(
          <ImageCard key={country.id}>
            <div>
              <Image>
            <img src={country.image} alt={country.country}/>
            </Image>
            <TextCard>
              <TextInner>
            <ProductTitle>{country.title}</ProductTitle>
            <HashTag>{country.hash}</HashTag>
            <Price><span>{setComma(country.price)}</span>원{" "}~</Price>
            </TextInner>
          </TextCard>
          </div>
          </ImageCard>
          ))}
        </ProductList>
        </InnerContent>
    </HotProductWrapper>
  )
}

export default HotProduct

const HotProductWrapper = styled.div`
 background:#f8f8f8;
 padding:90px 0 200px;
`
const InnerContent = styled.div`
max-width: 1280px;
padding: 5px 50px;
margin: 0 auto;
`

const Title = styled.p`
  font-weight:900;
  font-size:30px;
`

const ProductList = styled.div`
display:grid;
grid-gap:30px;
grid-template-columns: repeat(3,1fr);
margin-top:100px;
`

const ImageCard = styled.div`
position:relative;
cursor:pointer;
`

const Image = styled.div`
   img {
    border-radius:10px;
    width:370px;
    min-height:430px;
    object-fit:cover;
   }
`

const TextCard = styled.div`
   position:absolute;
   top:70%;
   right:0;
   z-index:9;
   width:300px;
   min-height:198px;
   background:#ffff;
   border-radius:10px 10px 0;
   box-shadow:10px 10px 25px #11111119;
   padding:28px;
`

const TextInner = styled.div`
 height: 147px;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
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
