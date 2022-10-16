import styled from 'styled-components';


const StyledParagraph = styled.span`
color:black;
font-size: ${props => props.size || '14px'};
font-style: ${props => props.style || 'italic'};
margin: ${props => props.margin || '0'};
align-self: ${props => props.align_self || 'auto'};
width: ${props => props.width || 'auto'};
`;
const Paragraph =(props)=>{
  return <StyledParagraph {...props}/>;
};

export default Paragraph;
