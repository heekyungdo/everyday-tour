import React from 'react'
import styled from 'styled-components'
import { BsBell } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BsCalendar2Check } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
const SystemMenus = () => {
  return (
    <SystemWrapper>
      <IconWrapper>
      <BsBell size="20"/>
      <Text>알림</Text>
      </IconWrapper>
      <IconWrapper>
      <VscAccount size="20"/>
        <Text>마이페이지</Text>
      </IconWrapper>
      <IconWrapper>
      <BsCalendar2Check size="20"/>
      <Text>예약내역</Text>
      </IconWrapper>
      <IconWrapper>
      <CgLogOut size="20"/>
      <Text>로그아웃</Text>
      </IconWrapper>
    </SystemWrapper>
  )
}

export default SystemMenus

const SystemWrapper = styled.div`
  display:flex;
  column-gap: 12px;
`

const Text = styled.p`
  margin-top:5px;
  font-size:12px;
`

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor:pointer;
`