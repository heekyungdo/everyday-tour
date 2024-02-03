import React from 'react'
import styled from 'styled-components'
import { BsBell } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BsCalendar2Check } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { Link } from 'react-router-dom';

const routes = [
 {to:'/notification', name:'알림', icon:<BsBell size="20"/>},
 {to:'/mypage', name:'마이페이지', icon:<VscAccount size="20"/>},
 {to:'/reservation', name:'예약내역', icon:<BsCalendar2Check size="20"/>},
 {to:'/logout', name:'로그아웃', icon:<CgLogOut size="20"/>},
]

const SystemMenus = () => {
  return (
    <SystemWrapper>
      {routes.map(({to, name, icon}) => (
        <Link to={to}>
         <IconWrapper>
         {icon}
         <Text>{name}</Text>
         </IconWrapper>
         </Link>
      ))}
  </SystemWrapper>
  )
}

export default SystemMenus

const SystemWrapper = styled.div`
  display:flex;
  column-gap: 12px;
`

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor:pointer;
`

const Text = styled.p`
  margin-top:5px;
  font-size:12px;
`

