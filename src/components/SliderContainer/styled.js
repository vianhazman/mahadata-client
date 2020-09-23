import styled, { css } from "styled-components";
import { Paper } from "@material-ui/core";

export const StyledWrapper = styled(Paper)`
  position: absolute;
  bottom: 0;
  padding: 1% 1% 1% 1%;
  margin: 2% 2% 2% 2%;
  width: 50vw;
  background-color: rgba(255, 255, 255, 0.75);

  .MuiSlider-thumb::after {
    position: absolute;
    height: 40px;
    width: 2px;
    border-radius: 0px;
    margin-top: -25px;
    margin-left: 20px;
    background-color: currentColor;
    ${(props) =>
      !props.isOpen &&
      css`
        display: none;
      `}

  .recharts-wrapper {
    margin-bottom: -50px;
  }
`;
