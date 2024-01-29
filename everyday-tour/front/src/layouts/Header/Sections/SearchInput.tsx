import React from 'react'
import iconSearch from '../../../assets/icons/icon_search.svg'
import styled from 'styled-components'

const SearchInput = () => {
  return (
    <SearchWrapper>
      <InputSearch
      type="text"
      placeholder='검색어를 입력해 주세요.'/>
      <img src={iconSearch} alt="search"/>
    </SearchWrapper>
  )
}

export default SearchInput

const SearchWrapper = styled.div`
    height: 100%;
  
`

const InputSearch = styled.input`
    padding-left: 10px;
    background-color: #f5f6f6;
    border-color: #f5f6f6;
    border-radius: 22px;
    width:395px;
`