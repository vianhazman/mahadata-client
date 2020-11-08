import { Paper } from "@material-ui/core";
import { TOGGLE } from "../../constants/MapConstants";
import styled from "styled-components";

export const StyledMapContainer = styled(Paper)`
  z-index: -9;
  background-color: black;
  height: ${({ toggle, selectedRegion }) =>
    (!selectedRegion && "80vh") ||
    (toggle === TOGGLE.PROVINCE && "50vh") ||
    (toggle === TOGGLE.CITY && "60vh")};
`;
