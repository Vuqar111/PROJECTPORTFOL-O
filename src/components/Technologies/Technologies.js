import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';



const Technologies = () =>  (
  <Section id='tech'>
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
      I have experience working with the following technologies:
      HTML | CSS | Javascript | React | Redux | Node | Express | MongoDB | Firebase | Zend
   </SectionText>
   <List>
     <ListItem>
       <DiFirebase size={'1.5em'}/>
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>Experience with <br/> React Js</ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size={'1.5em'}/>
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>Experience with <br/> React Js</ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size={'1.5em'}/>
       <ListContainer>
         <ListTitle>Data-End</ListTitle>
         <ListParagraph>Experience with <br/> React Js</ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
  </Section>
);

export default Technologies;
