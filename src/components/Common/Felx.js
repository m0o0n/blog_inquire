import styled from 'styled-components';


const StyledFlex = styled.div`
display:flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};
margin: ${props => props.margin || '0'};
height: ${props => props.height || 'auto'};
width: ${props => props.width || 'auto'};
align-self: ${props => props.align_self || 'auto'};
`;
const Flex =(props)=>{
  return <StyledFlex {...props}/>;
};

export default Flex;
