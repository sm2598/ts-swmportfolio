import {
  Name,
  Wrapper,
  WrapperColumn,
  WrapperRow,
  WrapperTopSection,
} from "./Main.styles";

const MainUI = () => {
  return (
    <Wrapper>
      <WrapperTopSection>
        <WrapperRow>
          <WrapperColumn>
            <div>Frontend Developer</div>
            <Name>Sung Woo (Steve Min)</Name>
          </WrapperColumn>
          <WrapperColumn>
            <div style={{ width: "15%" }}>
              I'm a NYC based Software Engineer & Frontend Developer. I am
              pursuing my Bachelors in Information Science in Cornell
              University, College of Arts and Sciences.
            </div>
          </WrapperColumn>
        </WrapperRow>
      </WrapperTopSection>
    </Wrapper>
  );
};

export default MainUI;
