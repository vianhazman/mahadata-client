import { Box, Paper } from "@material-ui/core";

import styled from "styled-components";

export const StyledWrapperRanking = styled.div`
  top: 15%;
  right: 0;
  padding: 1% 1% 1% 1%;
  margin: 2% 2% 2% 2%;
  background-color: rgba(255, 255, 255, 0.75);
  height: 25px;
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
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin: 0;
  }
  margin-bottom: 1rem;
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WrapperRanking = styled.div`
  h5 {
    margin-bottom: 0.2rem;
  }
  ol {
    padding-left: 1rem;
    margin-top: 0.3rem;
  }
  li {
    font-weight: normal;
    font-size: 0.75rem;
    margin: 0.2rem;
  }
`;
