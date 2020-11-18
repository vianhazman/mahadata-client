import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 1% 0% 1% 1%;
  background-color: rgba(255, 255, 255, 0.75);

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media only screen and (max-width: 720px) {
    .title {
      flex-direction: column;
      justify-content: start;
      h5:nth-of-type(1) {
        margin-bottom: 0.2rem;
      }
    }
  }
`;
