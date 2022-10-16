import styled, { css } from 'styled-components';


const StyledButton = styled.button`
color: ${props => props.color || 'white'};
font-size: ${props => props.size || '18px'};
font-style: ${props => props.style || 'normal'};
margin: ${props => props.margin || '0'};
padding: ${props => props.padding || '0'};
align-self: ${props => props.align_self || 'auto'};
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
background: ${props => props.background || 'black'};
cursor: pointer;
transition: 0.4s all linear;
${props => props.hover && css`
&:hover{
    background: ${props => props.hover_background || 'transparent'};;
    border: 2px solid black;
    color: ${props => props.hover_color || 'black'};
}
`}

`;
const Button =(props)=>{
  return <StyledButton {...props}/>;
};

export default Button;
