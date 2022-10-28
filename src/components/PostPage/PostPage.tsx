// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reset } from 'redux-form';
import {
  FetchCurrentThunk,
  CreateCommentThunk,
} from '../../redux/CommentReducer/comentActions.ts';
import { RootState } from '../../redux/redux-store';
// eslint-disable-next-line max-len
import { CommentsType } from '../../redux/CommentReducer/commentReducerTypes.ts';
import { useAppDispatch, useAppSelector } from '../../redux/redux.ts';
import Post from '../Post/Post.tsx';
import { AddCommentReduxForm } from '../Comment/CommentForm.tsx';
import Comment from '../Comment/Comment.tsx';
import Flex from '../Common/Felx';

type FormDataType = {
  body: string;
};
const PostPage: React.FC = props => {
  const { id } = useParams();
  const { CurrentPost } = useAppSelector((state: RootState) => state.Comments);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(FetchCurrentThunk(id));
  }, []);

  const AddComment: void = (FormData: FormDataType) => {
    dispatch(CreateCommentThunk({ postId: Number(id), body: FormData.body }));
    dispatch(reset('AddComment'));
  };
  return (
    <Flex width="50%" margin="0 auto" direction="column">
      <Post
        title={CurrentPost.title}
        description={CurrentPost.body}
        id={id}
        edit={true}
      />
      <AddCommentReduxForm onSubmit={AddComment} />
      <Flex direction="column" justify="flex-start">
        {CurrentPost.comments.map((c: CommentsType) => {
          return <Comment key={c.id} comment={c.body} />;
        })}
      </Flex>
    </Flex>
  );
};

export default PostPage;
