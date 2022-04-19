import React from 'react'
import styled from "styled-components"

const  BackgroundImage = (props) => (
  <Wrapper>
    <img src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='image'/>
  </Wrapper>
);

const Wrapper = styled.div`
img {
    width: 100%;
    height: 500px;
}
`


export default BackgroundImage
