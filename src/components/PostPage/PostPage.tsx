// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  FetchCurrentThunk,
  CreateCommentThunk,
} from '../../redux/comentReducer.ts';
import { RootState } from '../../redux/redux-store';
import { CommentsType } from '../../redux/comentReducer';
import { connect } from 'react-redux';
import Post from '../Post/Post.tsx';
import { AddCommentReduxForm } from '../Comment/CommentForm.tsx';
import Comment from '../Comment/Comment.tsx';
import Flex from '../Common/Felx';
type mapStatePropsType = {
  state: RootState;
  CurrentPost: {
    id: number;
    title: string;
    body: string;
    comments: Array<CommentsType>;
  };
};
type mapDispatchPropsType = {
  FetchCurrentThunk: () => Promise<void>;
  CreateCommentThunk: () => Promise<void>;
};
type PropsType = mapStatePropsType & mapDispatchPropsType & any;
type FormDataType = {
  body: string;
};
const PostPage: React.FC<PropsType> = props => {
  const { id } = useParams();
  useEffect(() => {
    props.FetchCurrentThunk(id);
  }, []);
  const AddComment: void = (FormData: FormDataType) => {
    props.CreateCommentThunk({ postId: Number(id), body: FormData.body });
  };
  return (
    <Flex width="50%" margin="0 auto" direction="column">
      <Post
        title={props.CurrentPost.title}
        description={props.CurrentPost.body}
        id={id}
        edit={true}
      />
      <AddCommentReduxForm onSubmit={AddComment} />
      <Flex direction="column" justify="flex-start">
        {props.CurrentPost.comments.map((c: CommentsType) => {
          return <Comment key={c.id} comment={c.body} />;
        })}
      </Flex>
    </Flex>
  );
};
const mapStateToProps = (state: RootState): mapDispatchPropsType => {
  return {
    state,
    CurrentPost: state.Comments.CurrentPost,
  };
};
export default connect<mapStatePropsType, mapDispatchPropsType, any, RootState>(
  mapStateToProps,
  {
    FetchCurrentThunk,
    CreateCommentThunk,
  },
)(PostPage);
