import React, { useRef, useState } from 'react'
import iconSearch from '../../../assets/icons/icon_search.svg'
import styled from 'styled-components'

const SearchInput = () => {
  const [clickSearch, setClickSearch] = useState(false)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <SearchWrapper>
      <Inputwrapper
      className={`input-search ${clickSearch}`} >
      <label htmlFor='search'></label>
         <InputSearch
           id="search"
           type="text"
           placeholder='검색어를 입력해 주세요.'
           onChange={handleChange}
           onFocus={() => setClickSearch(true)}
           onBlur={() => setClickSearch(false)}
           />
      </Inputwrapper>
      <SearchImg src={iconSearch} alt="search"/>
    </SearchWrapper>
  )
}

export default SearchInput

const SearchWrapper = styled.div`
    position:relative;
    .input-search.false {
      border: none;
      box-shadow: none;
    };
    .input-search.true {
      border: 1px solid #82CBC4;
      box-shadow: 0 0 3px #1670BE;
      outline-offset: 0;
      outline: none;
  };
`

const Inputwrapper = styled.div`
  background: #f5f6f6;
  border-color: #f5f6f6;
  padding:7px 11px;
  border-radius: 22px;
`
 

const InputSearch = styled.input`
    padding:7px 11px;
    border-color: #f5f6f6;
    background: #f5f6f6;
    width:300px;
    font-size:14px;
    outline:none;
    border:none;
    border-radius: 22px;
`

const SearchImg = styled.img`
position: absolute;
right: 17px;
top: 12px;
cursor:pointer;
`