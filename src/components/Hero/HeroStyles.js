import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;

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
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
