import { Box, Paper } from "@material-ui/core";

import { TOGGLE } from "../../constants/MapConstants";
import styled from "styled-components";

export const StyledWrapper = styled(Paper)`
  z-index: 10;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1% 1% 1% 1%;
  margin: 2% 2% 2% 2%;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  p {
    font-size: 10px;
    margin-bottom: 0;
  }
`;

export const WrapperBox = styled(Box)`
  align-items: center;
  width: ${({ toggleData }) =>
    (toggleData === TOGGLE.MOBILITY && "50vh") ||
    (toggleData === TOGGLE.RATIO && "60vh")};
  h6 {
    height: 30%;
    margin: 0 10% 0 0;
  }
  // margin-bottom: 0.5rem;
`;
export const Color = styled(Box)`
  background-color: ${({ color }) => color};
  height: 70%;
  width: 100%;
`;
export const WrapperTitle = styled.div`
  h6 {
    margin: 0;
    margin-bottom: 2%;
  }
`;
export const WrapperLegend = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1%;
`;
