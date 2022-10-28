import { ThunkAction } from 'redux-thunk';
// @ts-ignore
import { RootState } from './redux-store.ts';
export type PostType = {
  id: number;
  title: string;
  body: string;
};
export type InitialStateType = {
  Posts: Array<PostType>;
  isLoading: boolean;
  error: string;
};

export type FetchPostsACType = {
  type: 'FetchPosts';
  post: Array<PostType>;
};

export type CreatePostACType = {
  type: 'CreatePost';
  post: PostType;
};

export type DeletePostACType = {
  type: 'DeletePost';
  id: number;
};

export type ThunkType = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  ActionTypes
>;

export type ActionTypes =
  | FetchPostsACType
  | CreatePostACType
  | DeletePostACType;
