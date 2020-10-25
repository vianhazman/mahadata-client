import styled from "styled-components";

export const WrapperMobileLayout = styled.div`
  padding: 16px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    width: 40%;
  }
  > h3 {
    font-weight: normal;
    margin-bottom: 8px;
    text-align: center;
    > span {
      font-weight: bold;
    }
  }
  > h5 {
    font-weight: normal;
    margin-top: 0px;
  }
`;
