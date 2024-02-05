import React from 'react'
import styled from 'styled-components'
import Banner from './Sections/Banner'
import Search from './Sections/Search'
import RecommenProduct from './Sections/RecommendProduct'
import HotProduct from './Sections/HotProduct'

const LandingPage = () => {
  return (
    <MainWrapper>
      {/* <Banner/> */}
      <Main>
        <Search/>
        <RecommenProduct/>
        <HotProduct/>
      </Main>
    </MainWrapper>
  )
}

export default LandingPage

const MainWrapper = styled.div`
  margin-top:110px;
`

const Main = styled.div`
// max-width: 1420px;
// padding: 5px 50px;
// margin: 0 auto;
`