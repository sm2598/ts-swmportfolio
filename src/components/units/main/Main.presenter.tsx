import React from "react";
import { Helmet } from "react-helmet";
import {
  Name,
  Wrapper,
  WrapperColumn,
  WrapperRow,
  WrapperTopSection,
  Portrait,
  SkillCard,
  SkillCardImg,
  SkillsName,
  WrapperRowSkills,
  SkillsHeader,
  IconContainer,
  AboutMe,
  Highlight,
  HighlightText,
  Resume,
  AnimationName,
  AboutMeText,
} from "./Main.styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const MainUI = () => {
  const languages = [
    {
      path: "/javascript.png",
      name: "Javascript",
    },
    {
      path: "/ts.png",
      name: "Typescript",
    },
    {
      path: "/python.png",
      name: "Python",
    },
    {
      path: "/java.png",
      name: "Java",
    },
    {
      path: "/php.png",
      name: "php",
    },
  ];
  const frameworks = [
    {
      path: "/react.png",
      name: "React",
    },
    {
      path: "/redux.png",
      name: "Redux",
    },
    {
      path: "/jquery.png",
      name: "jquery",
    },
  ];
  const design = [
    {
      path: "/figma.png",
      name: "figma",
    },
  ];
  const tools = [
    {
      path: "/nodejs.png",
      name: "Nodejs",
    },
    {
      path: "/vscode.png",
      name: "Vscode",
    },
  ];

  return (
    <Wrapper>
      <Helmet>
        <title>Sung Woo Min's Website</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Sung Woo Min's Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:image" content="/me.png" />
      </Helmet>
      <WrapperTopSection>
        <WrapperRow>
          <WrapperColumn>
            <AboutMe>Entrepreneur, Frontend Developer, Student</AboutMe>
            <Name>
              Hi, I'm <b>Sung Woo (Steve) Min</b>
            </Name>
          </WrapperColumn>
          <WrapperColumn>{/* <Portrait src="/me.png" /> */}</WrapperColumn>
          <WrapperColumn style={{ borderLeft: "2px solid #36363636" }}>
            <div style={{ width: "300px", maxWidth: "100%" }}>
              I'm a NYC/Seoul based Software Engineer & Frontend Developer. I am
              pursuing my Bachelors in Information Science in Cornell
              University, College of Arts and Sciences.
            </div>
          </WrapperColumn>
        </WrapperRow>
        <WrapperRow>
          <IconContainer>
            <LinkedInIcon
              style={{ fontSize: "48px", margin: "12px" }}
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/sungwoomin/")
              }
            />
          </IconContainer>
          <IconContainer>
            <GitHubIcon
              style={{ fontSize: "48px", margin: "12px" }}
              onClick={(event) =>
                (window.location.href = "https://github.com/sm2598")
              }
            />
          </IconContainer>
        </WrapperRow>
      </WrapperTopSection>
      <WrapperTopSection style={{ backgroundColor: "#F9F9F9F9" }}>
        <WrapperRow style={{ justifyContent: "space-around" }}>
          {/* <WrapperColumn>
            <div style={{ color: "#black", fontSize: "36px" }}>About Me</div>
            <div style={{ color: "#36363636", fontSize: "36px" }}>About Me</div>
            <div style={{ color: "#36363636", fontSize: "36px" }}>About Me</div>
            <div style={{ fontSize: "36px" }}>About Me</div>
          </WrapperColumn> */}
          <WrapperColumn>
            <div style={{ color: "#3c4649", fontSize: "48px" }}>About Me</div>
            <AboutMeText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              pellentesque dapibus elit, ut pretium tortor. Sed dolor eros,
              dictum at ex ut, sodales vestibulum lectus. Nullam varius metus
              vitae justo eleifend, at feugiat lectus euismod. Donec lacus
              neque, molestie nec mi in, dapibus facilisis tellus. Proin
              tincidunt mattis nibh, eu viverra turpis tincidunt at. Vivamus
              egestas, velit sed semper hendrerit, est eros tincidunt mi,
              placerat condimentum tortor urna ac lorem. Ut blandit, ligula
              vitae posuere gravida, lectus odio vehicula sapien, nec pulvinar
              purus sapien nec nunc. Nam pharetra venenatis eleifend. Aliquam
              eget accumsan massa. Cras eu mi commodo, vestibulum lectus sed,
              venenatis sapien.
            </AboutMeText>
            <WrapperColumn style={{ alignItems: "center" }}>
              <Resume>Download Resume</Resume>
            </WrapperColumn>
          </WrapperColumn>
          <WrapperColumn>{/* <Portrait src="/me.png" /> */}</WrapperColumn>
        </WrapperRow>
      </WrapperTopSection>
      <WrapperTopSection style={{}}>
        <WrapperColumn style={{ marginTop: "20px;" }}>
          <SkillsHeader>Skills</SkillsHeader>
          <WrapperColumn>
            <SkillsName>Languages</SkillsName>
            <WrapperRowSkills>
              {languages.map((data) => (
                <SkillCard key={1}>
                  <SkillCardImg src={data.path} />
                </SkillCard>
              ))}
            </WrapperRowSkills>
            <SkillsName>Frameworks</SkillsName>
            <WrapperRowSkills>
              {frameworks.map((data) => (
                <SkillCard key={2}>
                  <SkillCardImg src={data.path} />
                </SkillCard>
              ))}
            </WrapperRowSkills>
            <SkillsName>Design</SkillsName>
            <WrapperRowSkills>
              {design.map((data) => (
                <SkillCard key={3}>
                  <SkillCardImg src={data.path} />
                </SkillCard>
              ))}
            </WrapperRowSkills>
            <SkillsName>Tools</SkillsName>
            <WrapperRowSkills>
              {tools.map((data) => (
                <SkillCard key={4}>
                  <SkillCardImg src={data.path} />
                </SkillCard>
              ))}
            </WrapperRowSkills>
          </WrapperColumn>
        </WrapperColumn>
      </WrapperTopSection>
      <WrapperTopSection style={{ backgroundColor: "#F9F9F9F9" }}>
        <WrapperColumn>
          <div style={{ fontSize: "48px" }}>Projects</div>
        </WrapperColumn>
      </WrapperTopSection>
    </Wrapper>
  );
};

export default MainUI;
