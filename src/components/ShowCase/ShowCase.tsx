/* eslint-disable indent */
// @ts-nocheck
import React, { useEffect } from 'react';
import Post from '../Post/Post.tsx';
import { AddPostReduxForm } from '../Post/AddPostForm.tsx';
import Flex from '../Common/Felx';
import { RootState } from '../../redux/redux-store';
import {
  CreatePostThunk,
  FetchPostsThunk,
} from '../../redux/PostReducer/PostActions.ts';
import { SubmitPostType } from '../../redux/comentReducer';
import { useAppDispatch, useAppSelector } from '../../redux/redux.ts';

const ShowCase: React.FC = () => {
  const dispatch = useAppDispatch();
  const { Posts } = useAppSelector((state: RootState) => state.Posts);
  useEffect(() => {
    dispatch(FetchPostsThunk());
  }, []);
  const CreatePost = (FormData: SubmitPostType) => {
    dispatch(CreatePostThunk({ title: FormData.title, body: FormData.body }));
  };
  return (
    <Flex direction="column" align="flex-start" width="70%" margin="0 auto">
      <AddPostReduxForm onSubmit={CreatePost} />
      <Flex direction="column" align="flex-start">
        {Posts.map((p: PostType) => {
          return (
            <Post key={p.id} id={p.id} title={p.title} description={p.body} />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ShowCase;
