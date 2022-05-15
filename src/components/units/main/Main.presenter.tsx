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
  ProjectCards,
  ProjectCardsAbout,
  ProjectCardsImg,
  ProjectCardsDesc,
} from "./Main.styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal/Fade";

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
            <WrapperRow>
              <Name>
                Hi, I'm <b>Sung Woo (Steve) Min</b>
              </Name>
              <Highlight src="/highlight.svg" />
            </WrapperRow>
          </WrapperColumn>
          <WrapperColumn style={{ borderLeft: "2px solid #36363636" }}>
            <div style={{ width: "300px", maxWidth: "100%" }}>
              I'm a NYC based Software Engineer & Frontend Developer. I am
              pursuing my Bachelors in Information Science with a concentration
              in Data Science in Cornell University, College of Arts and
              Sciences.
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
                (window.location.href = "https://github.com/sw-min")
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
              Sung Woo Min (he/him) is a Seoul-born, developer focused on web
              platforms. I am currently attending Cornell University in Ithaca,
              NY with a degree in Information Sciences in the Data Science and
              UX concentration. <br />
              <br />
              With the goal of creating special, niche corners of the web, I am
              working as a member of the Cornell Design and Tech Initiative
              project team to create new technologies. I am currently looking
              for an internship as a frontend developer.
            </AboutMeText>
            <WrapperColumn style={{ alignItems: "center" }}>
              <Resume
                onClick={(event) =>
                  (window.location.href =
                    "https://drive.google.com/file/d/1ekEGvYxUfKuwvh9hk57F18c3ndRJ80IV/view?usp=sharing")
                }
              >
                Download Resume
              </Resume>
            </WrapperColumn>
          </WrapperColumn>
          <WrapperColumn>{/* <Portrait src="/me.png" /> */}</WrapperColumn>
        </WrapperRow>
      </WrapperTopSection>
      <WrapperTopSection style={{}}>
        <WrapperColumn style={{ marginTop: "20px" }}>
          <SkillsHeader>Skills</SkillsHeader>
          <WrapperColumn>
            <Fade bottom>
              <SkillsName>Languages</SkillsName>
              <WrapperRowSkills>
                {languages.map((data) => (
                  <SkillCard key={1}>
                    <SkillCardImg src={data.path} />
                  </SkillCard>
                ))}
              </WrapperRowSkills>
            </Fade>
            <Fade bottom>
              <SkillsName>Frameworks</SkillsName>
              <WrapperRowSkills>
                {frameworks.map((data) => (
                  <SkillCard key={2}>
                    <SkillCardImg src={data.path} />
                  </SkillCard>
                ))}
              </WrapperRowSkills>
            </Fade>
            <Fade bottom>
              <SkillsName>Design</SkillsName>
              <WrapperRowSkills>
                {design.map((data) => (
                  <SkillCard key={3}>
                    <SkillCardImg src={data.path} />
                  </SkillCard>
                ))}
              </WrapperRowSkills>
            </Fade>
            <Fade bottom>
              <SkillsName>Tools</SkillsName>
              <WrapperRowSkills>
                {tools.map((data) => (
                  <SkillCard key={4}>
                    <SkillCardImg src={data.path} />
                  </SkillCard>
                ))}
              </WrapperRowSkills>
            </Fade>
          </WrapperColumn>
        </WrapperColumn>
      </WrapperTopSection>
      <WrapperTopSection style={{ backgroundColor: "#F9F9F9F9" }}>
        <WrapperColumn style={{ width: "90%" }}>
          <div style={{ fontSize: "48px" }}>Projects</div>
          <WrapperRow style={{ justifyContent: "center" }}>
            <Fade left>
              <WrapperColumn style={{ padding: "0px" }}>
                <ProjectCards>
                  <ProjectCardsAbout>
                    <b>BananaMarket</b>
                  </ProjectCardsAbout>
                  <ProjectCardsImg
                    src="/trading.png"
                    onClick={(event) =>
                      (window.location.href = "https://example1-code.web.app/")
                    }
                  />
                  <ProjectCardsDesc>P2P Trading Platform</ProjectCardsDesc>
                </ProjectCards>
                <IconContainer>
                  <GitHubIcon
                    style={{ fontSize: "24px", margin: "12px" }}
                    onClick={(event) =>
                      (window.location.href = "https://github.com/sw-min")
                    }
                  />
                </IconContainer>
              </WrapperColumn>
            </Fade>
            <Fade left>
              <WrapperColumn style={{ padding: "0px" }}>
                <ProjectCards>
                  <ProjectCardsAbout>
                    <b>NoHonBab</b>
                  </ProjectCardsAbout>
                  <ProjectCardsImg src="/nohonbab.png" />
                  <ProjectCardsDesc>
                    Matching Platform for People to Eat Together
                  </ProjectCardsDesc>
                </ProjectCards>
                <IconContainer>
                  <GitHubIcon
                    style={{ fontSize: "24px", margin: "12px" }}
                    onClick={(event) =>
                      (window.location.href = "https://github.com/sw-min")
                    }
                  />
                </IconContainer>
              </WrapperColumn>
            </Fade>
            <Fade right>
              <WrapperColumn style={{ padding: "0px" }}>
                <ProjectCards>
                  <ProjectCardsAbout>
                    <b>AllSwap</b>
                  </ProjectCardsAbout>
                  <ProjectCardsImg src="/allswap.png" />
                  <ProjectCardsDesc>
                    Textbook exchange within Cornell University.
                  </ProjectCardsDesc>
                </ProjectCards>
                <IconContainer>
                  <GitHubIcon
                    style={{ fontSize: "24px", margin: "12px" }}
                    onClick={(event) =>
                      (window.location.href = "https://github.com/sw-min")
                    }
                  />
                </IconContainer>
              </WrapperColumn>
            </Fade>
            <Fade right>
              <WrapperColumn style={{ padding: "0px" }}>
                <ProjectCards>
                  <ProjectCardsAbout>
                    <b>Cornell KSA</b>
                  </ProjectCardsAbout>
                  <ProjectCardsImg
                    src="/ksa.png"
                    onClick={(event) =>
                      (window.location.href = "https://cornellksa.com/")
                    }
                  />
                  <ProjectCardsDesc>
                    Cornell Korean Students Association organization website.
                  </ProjectCardsDesc>
                </ProjectCards>
                <IconContainer>
                  <GitHubIcon
                    style={{ fontSize: "24px", margin: "12px" }}
                    onClick={(event) =>
                      (window.location.href = "https://github.com/sm2598")
                    }
                  />
                </IconContainer>
              </WrapperColumn>
            </Fade>
          </WrapperRow>
        </WrapperColumn>
      </WrapperTopSection>
      <WrapperTopSection style={{ minHeight: "10vh", height: "300px" }}>
        <WrapperColumn>
          <div style={{ fontSize: "48px" }}>Contact Me</div>
          <div>Email: sm2598@cornell.edu</div>
        </WrapperColumn>
      </WrapperTopSection>
    </Wrapper>
  );
};

export default MainUI;
