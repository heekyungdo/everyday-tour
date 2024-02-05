import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../assets/logo.png'
import SearchInput from './Sections/SearchInput'
import PopularSearch from './Sections/PopularSearch'
import SystemMenus from './Sections/SystemMenus'

const leftRoutes = [
  { to: "/", name: "전체메뉴"},
  { to: "/overseas", name: "해외여행"},
  { to: "/domestic", name: "국내여행"},
  { to: "/flight", name: "항공"},
  { to: "/hotel", name: "호텔"},
]

const rightRoutes = [
  { to: "/special-exhibition", name: "기획전"},
  { to: "/customer-center", name: "고객센터"},
]

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <div>
        <img src={LogoImg} alt="everyday-tour" />
        </div>
        <SearchInput />
        <PopularSearch />
        <SystemMenus />
      </MenuWrapper>
      <MenuWrapper>
        <div>
          <BottomMenu>
            {leftRoutes.map(({to, name})=>(
              <li key={to}>{name}</li>
            ))}
          </BottomMenu>
        </div>
        <div>
        <BottomMenu>
            {rightRoutes.map(({to, name})=>(
              <li key={to}>{name}</li>
            ))}
          </BottomMenu>
        </div>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
    max-width: 1280px;
    width:100%;
    // max-width: 1420px;
    padding: 5px 50px;
    margin: 0 auto;
    height:45px;
`
const MenuWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
   &:last-child {
    margin-top:20px;
   }
`

const BottomMenu = styled.ul`
  display:flex;
  column-gap:30px;
  font-weight:600;
  cursor:pointer;
  //  li {
  //   &:focus {
  //     color:#82CBC4;
  //   }
  //  }
`