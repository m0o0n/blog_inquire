import { RootState } from '../redux-store';
import { ThunkAction } from 'redux-thunk';

export type ThunkType = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  ActionTypes
>;
export type CommentsType = {
  id: number;
  postId: number;
  body: string;
};
export type SubmitPostType = {
  title: string;
  body: string;
};
export type SubmitCommentType = {
  postId: number;
  body: string;
};
export type InitialStateType = {
  CurrentPost: {
    id: number;
    title: string;
    body: string;
    comments: Array<CommentsType>;
  };
};
export type CreateCommentACType = {
  type: 'CreateComment';
  body: CommentsType;
};
export type FetchCurrentACType = {
  type: 'FetchCurrent';
  id: number;
  title: string;
  body: string;
  comments: Array<CommentsType>;
};
export type ChangeCurrentACType = {
  type: 'ChangeCurrent';
  title: string;
  body: string;
};
export type ActionTypes =
  | CreateCommentACType
  | FetchCurrentACType
  | ChangeCurrentACType;
