import styled from "styled-components";
import { Button } from "../card-list-item/card-list-item-styled";
export const Header = styled.div`
  height: 70vh;
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;
export const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const HeadingPrimary = styled.h1`
  color: black;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
`;
export const HeadingPrimaryMain = styled(HeadingPrimary)`
  display: block;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 3.5rem;

  animation-duration: 1s;
  animation-timing-function: ease-out;
`;
export const HeadingPrimarySub = styled(HeadingPrimary)`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
  animation: 1s ease-out;
`;
export const TextBoxButton = styled(Button)`
  padding: 2rem 3.5rem;
`;
export const Navigation = styled.div`
  position:absolute;
  top:5rem;
  left:5rem;
 
`;
export const Li = styled.a`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  &:hover{
  color:green;}
`;
export const Footer = styled.div`
  background-color: #333;
  position: absolute;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 3rem 0;
  font-size: 1.2rem;
  color: #f7f7f7;
`;
