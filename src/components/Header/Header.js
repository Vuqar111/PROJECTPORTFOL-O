import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode, DiYeoman } from 'react-icons/di';
import {GrPersonalComputer} from 'react-icons/gr';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color:'#08ad76', fontSize: "35px", fontWeight: "bold"}}>
          <DiYeoman size="3rem"/> <span>VH</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technology">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://google.com'>
      <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
      <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://github.com'>
      <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
