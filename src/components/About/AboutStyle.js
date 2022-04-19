import styled from "styled-components"

export const AllAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 160px;
  
  
  button {
  background: red,
  border: 2px solid green;
  border-radius: 50px;
  color: green;
  display: flex;
  width: 250px;
  height: 55px;
  opacity: 1;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.md}{
    
  }

  @media ${props => props.theme.breakpoints.sm}{
   
  }
`

export const LeftAbout = styled.div`
  
  width: 80%;
  
  
  @media ${props => props.theme.breakpoints.md}{
    
  }

  @media ${props => props.theme.breakpoints.sm}{
   
  }
`

export const RightAbout = styled.div`
width: 80%;
  color: white;
  
  @media ${props => props.theme.breakpoints.md}{
    
  }

  @media ${props => props.theme.breakpoints.sm}{
   
  }
`




