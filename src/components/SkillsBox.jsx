import React from "react";
import {
  SkillsWrapper,
  HtmlBox,
  TitleAndProcBox,
  Html,
  Procentage,
  ProcBox,
  BgForProc,
  HtmlSkillLine,
} from "../styles/SkillBox.Styles";

const SkillsBox = () => {
  return (
    <SkillsWrapper>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>HTML</Html>
          <Procentage>90%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="90%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>CSS</Html>
          <Procentage>90%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="92%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>Javascript</Html>
          <Procentage>80%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="80%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>React</Html>
          <Procentage>90%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="90%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>Node</Html>
          <Procentage>95%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="50%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>Git</Html>
          <Procentage>80%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="80%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
      <HtmlBox>
        <TitleAndProcBox>
          <Html>SQL</Html>
          <Procentage>50%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="50%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>{" "}
      <HtmlBox>
        <TitleAndProcBox>
          <Html>Figma</Html>
          <Procentage>80%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="80%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>{" "}
      <HtmlBox>
        <TitleAndProcBox>
          <Html>Photoshop</Html>
          <Procentage>75%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="75%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>{" "}
      <HtmlBox >
        <TitleAndProcBox>
          <Html>Lightroom</Html>
          <Procentage>85%</Procentage>
        </TitleAndProcBox>
        <ProcBox>
          <BgForProc>
            <HtmlSkillLine width="85%" />
          </BgForProc>
        </ProcBox>
      </HtmlBox>
    </SkillsWrapper>
  );
};

export default SkillsBox;
