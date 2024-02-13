import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from "react-icons/bs";
import 코타키나발루 from '../../../assets/images/코타키나발루.jpeg'
import 동유럽 from '../../../assets/images/동유럽.jpeg'
import 시드니 from '../../../assets/images/시드니.jpeg'
import 큐슈 from '../../../assets/images/큐슈.jpeg'
import 세부 from '../../../assets/images/세부.jpeg'

const products = [
    {id:1, name:'추울땐 동남아', image:코타키나발루},
    {id:2, name:'겨울 온천여행', image:동유럽},
    {id:3, name:'지방출발', image:시드니},
    {id:4, name:'자유여행', image:큐슈},
    {id:5, name:'추천특가', image:세부},
]
const FourthSection = () => {
  return (
    <div>
        <Title>MD 추천상품</Title>
        <Divided>
            <div>
                {products.map(product=>(
                    <CategoryWrapper key={product.id}
                    style={{
                        backgroundImage: `url(${product.image})`,
                      }}>
                    <Category>{product.name}</Category>
                    <span><BsArrowRight color='white'/></span>
                    </CategoryWrapper>
                ))}
            </div>
            <div></div>
        </Divided>
    </div>
  )
}

export default FourthSection

const Title = styled.p`
font-weight:900;
font-size:30px;
`
const Divided = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
`
const CategoryWrapper = styled.div`
display:flex;
justify-content:space-between;
width:210px;
 border-radius:50px;
 padding:24px 26px;
 cursor:pointer;
 &::before{
    background-size: cover;
  background-position: center;
 }
`
const Category = styled.span`
font-size:16px;
color:#ffff;
`