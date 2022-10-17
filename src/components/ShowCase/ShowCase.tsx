/* eslint-disable indent */
// @ts-nocheck
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../Post/Post.tsx';
import { AddPostReduxForm } from '../Post/AddPostForm.tsx';
import Flex from '../Common/Felx';
import { RootState } from '../../redux/redux-store';
import {
  PostType,
  CreatePostThunk,
  FetchPostsThunk,
} from '../../redux/postReducer.ts';
import { SubmitPostType } from '../../redux/comentReducer';
type mapStatePropsType = {
  state: RootState;
  Posts: {
    Posts: Array<PostType>;
  };
};
type mapDispatchPropsType = {
  FetchPostsThunk: () => Promise<void>;
  CreatePostThunk: () => Promise<void>;
};

type PropsType = mapStatePropsType & mapDispatchPropsType & any;

const ShowCase: React.FC<PropsType> = props => {
  useEffect(() => {
    props.FetchPostsThunk();
  }, []);
  const CreatePost = (FormData: SubmitPostType) => {
    props.CreatePostThunk({ title: FormData.title, body: FormData.body });
  };
  return (
    <Flex direction="column" align="flex-start" width="70%" margin="0 auto">
      <AddPostReduxForm onSubmit={CreatePost} />
      <Flex direction="column" align="flex-start">
        {props.Posts.Posts.map((p: PostType) => {
          return (
            <Post key={p.id} id={p.id} title={p.title} description={p.body} />
          );
        })}
      </Flex>
    </Flex>
  );
};
const mapStateProps = (state: RootState): mapStatePropsType => {
  return {
    state: state,
    Posts: state.Posts,
  };
};
export default connect<mapStatePropsType, mapDispatchPropsType, any, RootState>(
  mapStateProps,
  { FetchPostsThunk, CreatePostThunk },
)(ShowCase);
