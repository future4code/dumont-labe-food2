import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: center;
    align-items: center;
    align-content: center;
    width: 300px;
    height: 25px;
    padding: 10px 4px 16px 10px;
    border-radius: 3px;
    border: solid 1px #b8b8b8;
`

export const Input = styled.input`
    padding: 10px 0 10px 15px;
    font-family: Roboto-Regular;
    font-size: 16px;
    border: none;

    &::hover {
        color: white;
    }

    &::active {
        color: white;
    }

    &::placeholder {
        font-family: Roboto-Regular;
        font-size: 20px;
        color: #d0d0d0;
    }
`