import React from 'react'
import styled from 'styled-components'

const Search = () => {
  return (
    <SearchWrapper>
        <SearchBox>
        <InputWrapper>
            <label htmlFor="country"></label>
            <span>
            <input type="text" id="country" placeholder='지역을 선택하세요'/>
            </span>
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="airport"></label>
            <span>
            <input type="text" id="airport"/>
            </span>
        </InputWrapper>
        <InputWrapper>
            <label htmlFor="date"></label>
            <span>
            <input type="text" id="date"/>
            </span>
        </InputWrapper>
        <div>
            <Button type="submit">
                검색하기
            </Button>
        </div>
        </SearchBox>
    </SearchWrapper>
  )
}

export default Search

const SearchWrapper = styled.div`
max-width: 1280px;
width:100%;
margin:0 auto;
`

const SearchBox = styled.div`
    display:flex;
    justify-content:space-between;
    max-width:1200px;
    margin: 0 auto;
    background:#FCFCFC;
    box-shadow:0px 3px 6px #11111119;
    border-radius:10px;
    padding:60px 40px;
`

const InputWrapper = styled.div`

    span {
        padding:10px 40px;

        input {
            padding:10px 8px;
            width:100%;
            border: 1px solid #d3dbd9;
            border-radius:5px;
        }
    }
`

const Button = styled.button`
    padding:10px 40px;
    cursor:pointer;
    border-radius:5px;
    border:none;
`