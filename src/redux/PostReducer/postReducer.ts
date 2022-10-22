// @ts-ignore
import { GetAll, CreatePost, Delete } from '../../API/postApi.ts';
import { reset } from 'redux-form';
import {
  ActionTypes,
  CreatePostACType,
  DeletePostACType,
  FetchPostsACType,
  InitialStateType,
  PostType,
  ThunkType,
} from './postReducerTypes';

const InitialState: InitialStateType = {
  Posts: [
    {
      id: 0,
      title: 'In quibusdam tempore odit est dolorem',
      // eslint-disable-next-line max-len
      body: 'Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio',
    },
  ],
};

const PostsReducer = (
  state: InitialStateType = InitialState,
  action: ActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'FetchPosts':
      return {
        ...state,
        Posts: [...action.post],
      };
    case 'CreatePost':
      return {
        ...state,
        Posts: [...state.Posts, action.post],
      };
    case 'DeletePost':
      return {
        ...state,
        Posts: state.Posts.filter(p => p.id !== action.id),
      };
    default:
      return state;
  }
};

const FetchPostsAC = (post: Array<PostType>): FetchPostsACType => ({
  type: 'FetchPosts',
  post,
});

const CreatePostAC = (post: PostType): CreatePostACType => ({
  type: 'CreatePost',
  post,
});

const DeletePostAC = (id: number): DeletePostACType => ({
  type: 'DeletePost',
  id,
});

export const FetchPostsThunk = (): ThunkType => {
  return async dispatch => {
    const posts = await GetAll();
    dispatch(FetchPostsAC(posts));
  };
};

export const CreatePostThunk = (post: PostType): ThunkType => {
  return async dispatch => {
    const response = await CreatePost(post);
    // @ts-ignore
    dispatch(reset('AddPost'));
    dispatch(
      CreatePostAC({
        id: response.id,
        title: response.title,
        body: response.body,
      }),
    );
  };
};

export const DeletePostThunk = (id: number): ThunkType => {
  return async dispatch => {
    await Delete(id);
    dispatch(DeletePostAC(id));
  };
};

export default PostsReducer;
