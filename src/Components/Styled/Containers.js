import styled, {css} from 'styled-components';


const Container = styled.div`
  padding: 20px;
  height: 100vh;
  text-align:center;
`;

const HomeContainer = styled(Container)`
  background-color: #091E42;

   ${props => props.primary && css`
    background: yellow;
    color: red;
  `}
`
const ButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  

`;

export { Container, HomeContainer, ButtonContainer }


