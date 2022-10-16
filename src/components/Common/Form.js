import styled from 'styled-components';


const StyledForm = styled.form`
display:flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};
margin: ${props => props.margin || '0'};
height: ${props => props.height || 'auto'};
width: ${props => props.width || 'auto'};
align-self: ${props => props.align_self || 'auto'};
`;
const Form =(props)=>{
  return <StyledForm {...props}/>;
};

export default Form;
