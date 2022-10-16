import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { DeletePostThunk } from '../../redux/postReducer';
import { EditPostReduxForm } from './EditPostForm';
import Flex from '../Common/Felx';
import Title from '../Common/Title';
import Paragraph from '../Common/Paragraph';
import Button from '../Common/Button';

import { ChangeCurrentThunk } from '../../redux/comentReducer';
const Post = props => {
  const [isEdit, setIsEdit] = useState(false);
  const SubmitEdits = FormData => {
    props.ChangeCurrentThunk(props.id, {
      title: FormData.title,
      body: FormData.body,
    });
    setIsEdit(false);
  };
  const DeletePost = id => {
    props.DeletePostThunk(id);
  };
  return (
    <Flex width="100%" justify="flex-start" margin="10px 0 10px 0">
      {!isEdit ? (
        <div>
          {props.edit ? (
            <Flex height="60px" justify="flex-start">
              <Title weight="600" margin="0 10px 0 0">
                {props.title}
              </Title>
              <Button
                hover
                hover_color="green"
                hover_background="black"
                size="14px"
                padding="5px"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </Button>
            </Flex>
          ) : (
            <Flex height="60px" justify="flex-start">
              <NavLink to={`post/${props.id}`}>
                <Title weight="600" margin="0 10px 0 0">
                  {props.title}
                </Title>
              </NavLink>
              <Button
                hover
                hover_color="red"
                hover_background="black"
                size="14px"
                padding="5px"
                onClick={() => DeletePost(props.id)}
              >
                Delete post
              </Button>
            </Flex>
          )}

          <Paragraph size="16px">{props.description}</Paragraph>
        </div>
      ) : (
        <Flex width="100%">
          <EditPostReduxForm
            title={props.title}
            description={props.description}
            postId={props.id}
            onSubmit={SubmitEdits}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default connect(state => ({ state: state }), {
  ChangeCurrentThunk,
  DeletePostThunk,
})(Post);
