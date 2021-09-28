import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AboutMeText = styled.div`
  color: "#3c4649";
  max-width: 800px;
  width: 100%;
  font-size: 16px;
`
export const WrapperTopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
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
  position: relative;
  font-size: 48px;
  display: inline-block;
  overflow: hidden;
  letter-spacing: 2px;
  animation: typing 3s steps(30, end), blink .9s step-end infinite;
  white-space: nowrap;
  font-weight: 700;
  border-right: 4px solid black;
  box-sizing: border-box;
  z-index: 2;

  @keyframes typing {
    from { 
        width: 0% 
    }
    to { 
        width: 100% 
    }
  }

  @keyframes blink {
      from, to { 
          border-color: transparent 
      }
      50% { 
          border-color: orange; 
      }
  }
`
export const AnimationName = styled.div`
  font-size: 48px;
`
export const HighlightText = styled.div`
  font-size: 48px;
  z-index: 1;
  position: relative;
`
export const Highlight = styled.img`
  z-index: 1;
  display: absolute;
  height: 50px;
  width: 500px;
  opacity: 70%;
  margin-left: -515px;
  margin-top: 18px;
  object-fit: cover;

  animation-name: left;
  animation-duration: 6s;
  animation-timing-function:ease-in;


  @keyframes left {
    from {
      opacity: 0%;
      width: 0px;
    }
    to {
      opacity: 70%;
      width: 500px;
    }
  }
`

export const AboutMe = styled.div`
color: #91959b;
font-size: 24px;
max-width: 1920px;
width: 100%;

  animation-duration: 5s;
  animation-name: slide;


  @keyframes slide {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(00px);
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
export const Resume = styled.button`
  max-width: 100%;
  width: 220px;
  height: 50px;

  background: #3c4649;
  color: white;
  border: none;
  border-radius: 10px;
  
  cursor: pointer;

  transition-duration: 0.3s;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition-duration: 0.3s;
    transform: scale(1.2, 1.2);
    opacity: 50%;
  }
`
export const SkillsHeader = styled.div`
  font-size: 48px;
  color: #3c4649;
  margin-top: 20px;
`
export const SkillCard = styled.div`
  max-width: 100px;
  max-height: 100px;
  margin: 20px;
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
export const ProjectCards = styled.div`
  margin: 16px;
  max-width: 250px;
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition-duration: 0.3s;
  border: 0.5px solid black;

  &:hover {
    filter: contrast(100%);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    transition-duration: 0.3s;
    transform: scale(1.05, 1.05);
  }
`
export const ProjectCardsAbout = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  background: #F9F9F9F9;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`
export const ProjectCardsImg = styled.img`
  display: flex;
  flex-direction: column;
  height: 60%;
  object-fit: cover;
  opacity: 70%;
  cursor: pointer;
`
export const ProjectCardsDesc = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  background: #F9F9F9F9;
  padding: 12px;
`