import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
// @ts-ignore
import { DeletePostThunk } from '../../redux/PostReducer/postReducer.ts';
import { SubmitPostType } from '../../redux/CommentReducer/commentReducerTypes';
// @ts-ignore
import { EditPostReduxForm } from './EditPostForm.tsx';
import Flex from '../Common/Felx';
import Title from '../Common/Title';
import Paragraph from '../Common/Paragraph';
import Button from '../Common/Button';
// @ts-ignore
// eslint-disable-next-line max-len
import { ChangeCurrentThunk } from '../../redux/CommentReducer/comentReducer.ts';
type mapStatePropsType = {
  state: RootState;
};
type mapDispatchPropsType = {
  ChangeCurrentThunk: (id: number, post: SubmitPostType) => Promise<void>;
  DeletePostThunk: (id: number) => Promise<void>;
};
type OwnPropsType = {
  id: number;
  title: string;
  description: string;
  edit: boolean;
};
type PropsType = mapStatePropsType & mapDispatchPropsType & OwnPropsType;
const Post: React.FC<PropsType> = props => {
  const [isEdit, setIsEdit] = useState(false);
  const SubmitEdits = (FormData: SubmitPostType): void => {
    props.ChangeCurrentThunk(props.id, {
      title: FormData.title,
      body: FormData.body,
    });
    setIsEdit(false);
  };
  const DeletePost = (id: number): void => {
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
            onSubmit={SubmitEdits}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default connect<
  mapStatePropsType,
  mapDispatchPropsType,
  OwnPropsType,
  RootState
>((state: RootState): mapStatePropsType => ({ state: state }), {
  ChangeCurrentThunk,
  DeletePostThunk,
})(Post);
