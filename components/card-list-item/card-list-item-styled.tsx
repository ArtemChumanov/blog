import styled from "styled-components";
export const Card = styled.div`
    width:25%;
    height:14rem;
    justify-content:flex-end;
    border:1px solid grey;
    border-radius:10px;
    margin: 2rem;
    box-sizing:border-box`;

export const CardTextContent = styled.div`
  margin: 0.5rem;
`;
export const Title = styled.span`
  font-family: Verdana, sans-serif;
  font-size: 2em;
  margin: 1rem;
`;

export const Text = styled.p`
  font-family: cursive;
  padding:0 0 auto 0;
`;

export const Button = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem 2rem;
  margin:auto 0;
  display: inline-block;
  border-radius: 10rem;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  background-color: green;
  color: white;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(black, 0.2);
  }
`;
