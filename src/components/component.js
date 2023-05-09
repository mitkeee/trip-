import styled from 'styled-components';

export const PriceofProduct = styled.div`
  align-items: center;
  color: #6B7280;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 10px 70px;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: #059669;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
`;

export const h = styled.h1`
font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Button2 = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  margin: 20px;
  border: none;
  transition: 0.5s;
  cursor: pointer;
  float: right;
`;
//fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary