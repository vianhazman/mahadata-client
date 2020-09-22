import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

export const StyledContainer = styled(Grid)`
  .MuiSlider-root {
    position: absolute;
    margin-left: 80px;
    margin-top: 0;
    width: calc((100% - 110px));
  }

  .MuiSlider-thumb::after {
    position: absolute;
    height: 120px;
    width: 2px;
    border-radius: 0px;
    margin-top: -100px;
    background-color: currentColor;
  }
`;
