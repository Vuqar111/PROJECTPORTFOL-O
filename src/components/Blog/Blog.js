import React from 'react';

import { BlogCard,BlogDeadline, Date, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './BlogStyle';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { blogs } from '../../constants/constants';

const Blog = () => (
  <Section nopadding id="projects">
    
    <SectionTitle main>Blogs</SectionTitle>
    <GridContainer>
      {blogs.map((project, index) =>  (
        <BlogCard key={index}>
        <Img src={project.image}/>
        <TitleContent>
          <HeaderThree title>
            {project.title}
          </HeaderThree>
        </TitleContent>
        <BlogDeadline>
          <Date>
              <span>Vugar Hasanov</span>
          </Date>
          <Date>
          Visit Blog
          </Date>
        </BlogDeadline>
      
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Blog;