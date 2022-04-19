import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';



const Hero = () => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Vugar Hasanov <br/> 
       Front-End Developer
     </SectionTitle>
     <SectionText>
       The purpose of IzahTAP is to help aspiring established developers learn the fundamentals of Javascript.
     </SectionText>
     <button>Learn More</button>
   </LeftSection>
  </Section>
);

export default Hero;