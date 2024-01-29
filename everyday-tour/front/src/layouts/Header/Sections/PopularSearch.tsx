import React from 'react'
import styled from 'styled-components'

const PopularSearch = () => {
  return (
    <div>
      <TitleText>인기 검색어</TitleText>
    </div>
  )
}

export default PopularSearch

const TitleText = styled.span`
 color:#888888;
 font-size:14px;
 cursor:pointer;
 &:hover{
  color: #82CBC4;
 }
`