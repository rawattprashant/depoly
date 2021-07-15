import React from 'react';
import { DiFirebase, DiGit, DiJava, DiMongodb, DiNodejs, DiReact, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have dabbled in many Technologies and all of them has been listed below:
    </SectionText>
    <List>
      <ListItem>
      <DiReact size="3rem" />
        <ListContainer >
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with <br />
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiNodejs size="3rem" />
        <ListContainer >
          <ListTitle>Backend</ListTitle>
          <ListParagraph>Experience with <br />
          node
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiGit size="3rem" />
        <ListContainer >
          <ListTitle>Git</ListTitle>
          <ListParagraph>Experience with <br />
          Git & Github
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiJava size="3rem" />
        <ListContainer >
          <ListTitle>Java</ListTitle>
          <ListParagraph>Experience in <br />
          Jave Enterprise Devlopment
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

// <DiReact size="3rem" />
//         <DiJava size="3rem" />
//         <DiNodejs size="3rem" />
//         <DiMongodb size="3rem" />
//         <DiVisualstudio size="3rem" />
//         <DiGit size="3rem" />

export default Technologies;
