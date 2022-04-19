  import React from "react";
  import { SectionText, SectionTitle } from "../../styles/GlobalComponents";
  import { AllAbout, LeftAbout, RightAbout } from "./AboutStyle";
  const About = () => {
    return (
      <AllAbout>
        <LeftAbout>
          <img
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
          />
        </LeftAbout>
        <RightAbout>
          <SectionTitle>About Me</SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, eu
            porttitor nisl nunc euismod nisi vel consectetur interdum nisl nunc
          </SectionText>
          <button>Download CV</button>
        </RightAbout>
      </AllAbout>
    );        
  };

  export default About;
