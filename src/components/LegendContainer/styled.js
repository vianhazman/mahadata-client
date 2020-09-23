import { Paper, Box } from "@material-ui/core";
import styled from "styled-components";

export const StyledWrapper = styled(Paper)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1% 1% 1% 1%;
  margin: 2% 2% 2% 2%;
  width: 15vw;
  background-color: rgba(255, 255, 255, 0.75);
  h3 {
    margin-top: 0;
    margin-bottm: 1rem;
  }
`;

export const WrapperBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 10px;
  h6 {
    margin: 0;
    margin-left: 1rem;
  }
  margin-bottom: 0.5rem;
`;
export const Color = styled(Box)`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 10%;
`;
