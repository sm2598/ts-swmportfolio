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
  min-height: 100vh;
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
`
export const WrapperRowSkills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid #3c4649;
`
export const Name = styled.div`
  font-size: 48px;
  position: relative;
`
export const HighlightText = styled.div`
  font-size: 48px;
  z-index: 1;
  position: relative;
`
export const Highlight = styled.img`
  z-index: -1;
  display: absolute;
  width: 300px;
  height: 50px;
`
export const AboutMe = styled.div`
color: #91959b;
font-size: 24px;

  animation-duration: 5s;
  animation-name: slide;


  @keyframes slide {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(00px);
      opacity: 1;
    }
  }
`

export const Portrait = styled.img`
  width: 300px;
  position: relative;
  z-index: 1;
  animation-duration: 3s;
  animation-name: show;


  @keyframes show {
    from {
      transform: translateX(00px);
      opacity: 0;
    }
    to {
      transform: translateX(00px);
      opacity: 1;
    }
  }
`;
export const SkillsHeader = styled.div`
  font-size: 48px;
  color: #3c4649;
`
export const SkillCard = styled.div`
  max-width: 100px;
  max-height: 100px;
  margin: 10px;
  border: 1px solid #f0f0f0;
`
export const SkillCardImg = styled.img`
  width: 100%;
  padding: 20px;
`
export const SkillsName = styled.div`
  font-size: 36px;
  color: #3c4649;
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`