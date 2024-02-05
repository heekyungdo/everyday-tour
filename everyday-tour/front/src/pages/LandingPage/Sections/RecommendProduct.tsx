import React from 'react'
import styled from 'styled-components'

const RecommenProduct = () => {
  return (
    <Wrapper>
        <Title>모두의 추천상품</Title>
    </Wrapper>
  )
}

export default RecommenProduct


const Wrapper = styled.div`
    margin-top:50px;
    
`
const Title = styled.p`
    font-weight:900;
    font-size:30px;
`