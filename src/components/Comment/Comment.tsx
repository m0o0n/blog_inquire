import Flex from '../Common/Felx';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
import styled from 'styled-components';
import Paragraph from '../Common/Paragraph';
import React from 'react';
// @ts-ignore
const StyledIcon = styled(FaUserCircle)`
  height: ${(props: any) => props.height || '30px'};
  width: ${(props: any) => props.width || '30px'};
`;
const Comment: React.FC<any> = props => {
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
