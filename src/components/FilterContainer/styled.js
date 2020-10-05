import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const StyledWrapper = styled(Paper)`
  position: absolute;
  top: 0;
  padding: 1% 1% 1% 1%;
  margin: 2% 2% 2% 2%;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 999;
  .MuiToggleButton-root {
    font-size: 0.5rem;
  }
  .MuiInputBase-input {
    height: 0.5rem;
  }
`;
