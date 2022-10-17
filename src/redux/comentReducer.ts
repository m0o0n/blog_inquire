// @ts-ignore
import { Create } from '../API/commentApi.ts';
// @ts-ignore
import { GetOne, UpDate } from '../API/postApi.ts';
import { reset } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
// @ts-ignore
import { RootState } from './redux-store.ts';
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
type InitialStateType = {
  CurrentPost: {
    id: number;
    title: string;
    body: string;
    comments: Array<CommentsType>;
  };
};
const InitialState: InitialStateType = {
  CurrentPost: {
    id: 0,
    title: '',
    body: '',
    comments: [],
  },
};
type ActionTypes =
  | CreateCommentACType
  | FetchCurrentACType
  | ChangeCurrentACType;
const comentReducer = (
  state = InitialState,
  action: ActionTypes,
): InitialStateType => {
  switch (action.type) {
    case 'FetchCurrent':
      return {
        ...state,
        CurrentPost: {
          id: action.id,
          title: action.title,
          body: action.body,
          comments: [...action.comments],
        },
      };
    case 'ChangeCurrent':
      return {
        ...state,
        CurrentPost: {
          id: state.CurrentPost.id,
          title: action.title,
          body: action.body,
          comments: [...state.CurrentPost.comments],
        },
      };
    case 'CreateComment':
      return {
        ...state,
        CurrentPost: {
          id: state.CurrentPost.id,
          title: state.CurrentPost.title,
          body: state.CurrentPost.body,
          comments: [...state.CurrentPost.comments, action.body],
        },
      };
    default:
      return state;
  }
};

type CreateCommentACType = {
  type: 'CreateComment';
  body: CommentsType;
};
const CreateCommentAC = (body: CommentsType): CreateCommentACType => ({
  type: 'CreateComment',
  body,
});
type FetchCurrentACType = {
  type: 'FetchCurrent';
  id: number;
  title: string;
  body: string;
  comments: Array<CommentsType>;
};
const FetchCurrentAC = (
  id: number,
  title: string,
  body: string,
  comments: Array<CommentsType>,
): FetchCurrentACType => ({
  type: 'FetchCurrent',
  id,
  title,
  body,
  comments,
});
type ChangeCurrentACType = {
  type: 'ChangeCurrent';
  title: string;
  body: string;
};
export const ChangeCurrentAC = (
  title: string,
  body: string,
): ChangeCurrentACType => ({
  type: 'ChangeCurrent',
  title,
  body,
});

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionTypes>;
export const FetchCurrentThunk = (id: number): ThunkType => {
  return async dispatch => {
    const current = await GetOne(id);
    dispatch(
      FetchCurrentAC(current.id, current.title, current.body, current.comments),
    );
  };
};

export const ChangeCurrentThunk = (
  id: number,
  post: SubmitPostType,
): ThunkType => {
  return async dispatch => {
    const response = await UpDate(id, post);

    dispatch(ChangeCurrentAC(response.title, response.body));
  };
};

export const CreateCommentThunk = (comment: SubmitCommentType): ThunkType => {
  return async dispatch => {
    const response = await Create(comment);
    dispatch(reset('AddComment'));
    dispatch(
      CreateCommentAC({
        id: response.id,
        postId: response.postId,
        body: response.body,
      }),
    );
  };
};

export default comentReducer;
