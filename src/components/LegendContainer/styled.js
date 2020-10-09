import { Paper, Box } from "@material-ui/core";
import styled from "styled-components";

export const StyledWrapper = styled(Paper)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1% 1% 1% 1%;
  margin: 2% 2% 2% 2%;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.75);
  ${({ isOpen }) =>
    isOpen &&
    `
animation: show 0.3s linear;
animation-fill-mode: forwards;
@keyframes show {
  0%   {height: 25px;}
 
  100% {height: 220px;}
}`}
  ${({ isOpen }) => !isOpen && "height:25px;"};
`;

export const WrapperBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 10px;
  h6 {
    margin: 0;
    margin-left: 0.5rem;
  }
  // margin-bottom: 0.5rem;
`;
export const Color = styled(Box)`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 10%;
`;
export const WrapperTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
  }
  margin-bottom: 1rem;
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WrapperLegend = styled.div`
  ${({ isOpen }) =>
    isOpen &&
    `
  animation: block 1s;
  animation-fill-mode: forwards;
  @keyframes block {
    0%   {opacity: 0;}
   
    100% {opacity: 1;}
  }


  `}
  ${({ isOpen }) => !isOpen && "opacity:0"};
`;
