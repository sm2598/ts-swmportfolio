import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperTopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 1920px;
  max-width: 100%;
  /* background-color: #ebe7e0; */
`;
export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
` 
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Name = styled.div`
  font-size: 48px;
`
export const Portrait = styled.img`
  width: 300px;
  position: relative;
  z-index: 1;
`;