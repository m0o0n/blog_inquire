import styled from 'styled-components';


const StyledInput = styled.input`
height: ${props => props.height || 'auto'};
width: ${props => props.width || 'auto'};
max-width: ${props => props.max_width || 'inhernit'};
padding: ${props => props.padding || '0'};
resize: none;
overflow-y: visible;
font-size: ${props => props.size || '20px'};
font-weight: ${props => props.weight || 'normal'};
font-style: ${props => props.ft_style || 'normal'};
`;

const Input =(props)=>{
  return <StyledInput {...props}/>;
};

export default Input;
