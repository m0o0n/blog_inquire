import styled from 'styled-components';


const StyledTitle = styled.h1`
color:black;
font-size: ${props => props.size || '20px'};;
font-weight: ${props => props.weight || 'normal'};
margin: ${props => props.margin || '0'};
width: ${props => props.width || 'auto'};
`;
const Title =(props)=>{
  return <StyledTitle {...props}/>;
};

export default Title;
