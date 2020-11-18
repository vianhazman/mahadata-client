import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

export const StyledContainer = styled(Grid)`
  .MuiSlider-root {
    margin-left: 130px;
    width: calc((120% - 0px));
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
