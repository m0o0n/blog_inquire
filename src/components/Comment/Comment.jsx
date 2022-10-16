import Flex from '../Common/Felx';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import styled from 'styled-components';
import Paragraph from '../Common/Paragraph';
const StyledIcon = styled(FaUserCircle)`
  height: ${props => props.height || '30px'};
  width: ${props => props.width || '30px'};
`;
const Comment = props => {
  return (
    <Flex align_self="flex-start" margin="15px 0 15px 0">
      <Flex align_self="flex-start" margin="0 10px 0 0">
        <StyledIcon />
      </Flex>
      <Paragraph>{props.comment}</Paragraph>
    </Flex>
  );
};
export default Comment;
