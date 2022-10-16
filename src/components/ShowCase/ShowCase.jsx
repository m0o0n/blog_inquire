/* eslint-disable indent */
import { useEffect } from 'react';
import { CreatePostThunk, FetchPostsThunk } from '../../redux/postReducer';

import { connect } from 'react-redux';
import Post from '../Post/Post';
import { AddPostReduxForm } from '../Post/AddPostForm';
import Flex from '../Common/Felx';
const ShowCase = props => {
  useEffect(() => {
    props.FetchPostsThunk();
  }, []);
  const CreatePost = FormData => {
    props.CreatePostThunk({ title: FormData.title, body: FormData.body });
  };
  return (
    <Flex direction="column" align="flex-start" width="70%" margin="0 auto">
      <AddPostReduxForm onSubmit={CreatePost} />
      <Flex direction="column" align="flex-start">
        {props.Posts.map(p => {
          return (
            <Post key={p.id} id={p.id} title={p.title} description={p.body} />
          );
        })}
      </Flex>
    </Flex>
  );
};
const mapStateProps = state => {
  return {
    state: state,
    Posts: state.Posts.Posts,
  };
};
export default connect(mapStateProps, { FetchPostsThunk, CreatePostThunk })(
  ShowCase,
);
