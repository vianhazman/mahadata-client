import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 2% 2% 2% 2%;
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
  p {
    font-size: 11px;
  }
  h5 {
    font-size: 11px;
    margin-bottom: 0.5%;
  }
  small {
    color: rgba(0, 0, 0, 0.87);
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
export const WrapperPaper = styled(Paper)`
  background-color: rgb(255, 255, 255);
  padding: 1% 1% 1% 1%;
  small {
    font-size: 12px;
  }
`;

export const WrapperHeader = styled.div`
  background-color: rgb(255, 255, 255);

  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .logo-tim {
    max-height: 120px;
  }
`;
export const WrapperTitle = styled.div`
  small {
    margin-bottom: 0.3rem;
    font-size: 10px;
    line-height: 0.1px;
    margin
  }
  h5 {
    font-weight: normal;
    margin-top: 0.3rem;
  }
  h3 {
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
  }
`;
