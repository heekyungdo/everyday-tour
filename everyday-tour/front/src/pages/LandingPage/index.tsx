import React from 'react'
import styled from 'styled-components'
import Banner from './Sections/Banner'
import Search from './Sections/Search'
import FirstSection from './Sections/FirstSection'
import SecondSection from './Sections/SecondSection'
import ThirdSection from './Sections/ThirdSection'
import FourthSection from './Sections/FourthSection'
import FifthSection from './Sections/FifthSection'

const LandingPage = () => {
  return (
    <MainWrapper>
      {/* <Banner/> */}
      <Main>
        <Search/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
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