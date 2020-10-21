import styled, {css} from 'styled-components';


const HomeButton = styled.div`

background: ${props => props.background};
color: ${props => props.color};
 width: 250px;
 padding:10px;
 margin:0 auto;
 margin-top:20px;
 border-radius: 5px;
`;
export{HomeButton}