// @ts-ignore
import { GetAll, CreatePost, Delete } from '../API/postApi.ts';
import { reset } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
// @ts-ignore
import { RootState } from './redux-store.ts';
export type PostType = {
  id: number;
  title: string;
  body: string;
};
type InitialStateType = {
  Posts: Array<PostType>;
};
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
type ActionTypes = FetchPostsACType | CreatePostACType | DeletePostACType;
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

type FetchPostsACType = {
  type: 'FetchPosts';
  post: Array<PostType>;
};
const FetchPostsAC = (post: Array<PostType>): FetchPostsACType => ({
  type: 'FetchPosts',
  post,
});
type CreatePostACType = {
  type: 'CreatePost';
  post: PostType;
};
const CreatePostAC = (post: PostType): CreatePostACType => ({
  type: 'CreatePost',
  post,
});
type DeletePostACType = {
  type: 'DeletePost';
  id: number;
};
const DeletePostAC = (id: number): DeletePostACType => ({
  type: 'DeletePost',
  id,
});

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>;

export const FetchPostsThunk = (): ThunkType => {
  return async dispatch => {
    const posts = await GetAll();
    dispatch(FetchPostsAC(posts));
  };
};

export const CreatePostThunk = (post: PostType): ThunkType => {
  return async dispatch => {
    const response = await CreatePost(post);
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
