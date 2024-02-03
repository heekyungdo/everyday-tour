import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../assets/logo.png'
import SearchInput from './Sections/SearchInput'
import PopularSearch from './Sections/PopularSearch'
import SystemMenus from './Sections/SystemMenus'
import { FiAlignJustify } from "react-icons/fi";

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
      <div>
        <div>
      <FiAlignJustify />
        </div>
        <div>
          
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
    padding:5px 20px;
    height:45px;
`
const MenuWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`