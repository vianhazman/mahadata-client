import Grid from "@material-ui/core/Grid";
import { TOGGLE } from "../../constants/MapConstants";
import styled from "styled-components";

export const StyledContainer = styled(Grid)`
  .MuiSlider-root {
    margin-left: 80px;
    width: calc((100% - 10px));
  }

  .MuiSlider-thumb::after {
    position: absolute;
    height: ${({ toggle }) => (toggle === TOGGLE.CITY && "120px") || "200px"};
    width: 2px;
    border-radius: 0px;
    margin-top: ${({ toggle }) =>
      (toggle === TOGGLE.CITY && "-100px") || "-180px"};

    background-color: currentColor;
  }

  .MuiSlider-thumb:hover::before,
  .MuiSlider-thumb:active::before {
    content: "${(props) => props.currentDate}";
    top: -70px;
    position: absolute;
    width: 6em;
    color: #000000;
    background-color: #ffffff;
    border-radius: 4px;
    text-align: center;
    padding: 8px;
  }
`;
