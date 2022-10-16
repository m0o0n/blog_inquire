import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  FetchCurrentThunk,
  CreateCommentThunk,
} from '../../redux/comentReducer';
import { connect } from 'react-redux';
import Post from '../Post/Post';
import { AddCommentReduxForm } from '../Comment/CommentForm';
import Comment from '../Comment/Comment';
import Flex from '../Common/Felx';
const PostPage = props => {
  const { id } = useParams();
  useEffect(() => {
    props.FetchCurrentThunk(id);
  }, []);
  const AddComment = FormData => {
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
        {props.CurrentPost.comments.map(c => {
          return <Comment key={c.id} comment={c.body} />;
        })}
      </Flex>
    </Flex>
  );
};
const mapStateToProps = state => {
  return {
    state,
    CurrentPost: state.Comments.CurrentPost,
  };
};
export default connect(mapStateToProps, {
  FetchCurrentThunk,
  CreateCommentThunk,
})(PostPage);
