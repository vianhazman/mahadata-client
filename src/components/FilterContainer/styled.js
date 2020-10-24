import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const StyledWrapper = styled(Paper)`
  position: absolute;
  top: 0;
  padding: 1rem 8rem 0% 1%;
  margin: 2% 2% 2% 2%;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 999;
  .MuiToggleButton-root {
    font-size: 0.5rem;
  }
  .MuiInputBase-input {
    height: 0.5rem;
  }
  .button-toggle {
    position: relative;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  > * {
    max-height: 40px;
    margin-right: 16px;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .logo-tim {
    position: absolute;
    right: -100px;
    top: -50px;
    max-height: 120px;
  }
`;
export const WrapperTitle = styled.div`
  h5 {
    font-weight: normal;
    margin-top: 0.3rem;
  }
  h3 {
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
  }
`;
