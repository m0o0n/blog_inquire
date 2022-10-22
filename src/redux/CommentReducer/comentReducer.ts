// @ts-ignore
import { Create } from '../../API/commentApi.ts';
// @ts-ignore
import { GetOne, UpDate } from '../../API/postApi.ts';
import { reset } from 'redux-form';

import {
  ActionTypes,
  ChangeCurrentACType,
  CommentsType,
  CreateCommentACType,
  FetchCurrentACType,
  InitialStateType,
  SubmitCommentType,
  SubmitPostType,
  ThunkType,
} from './commentReducerTypes';

const InitialState: InitialStateType = {
  CurrentPost: {
    id: 0,
    title: '',
    body: '',
    comments: [],
  },
};

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

const CreateCommentAC = (body: CommentsType): CreateCommentACType => ({
  type: 'CreateComment',
  body,
});

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

export const ChangeCurrentAC = (
  title: string,
  body: string,
): ChangeCurrentACType => ({
  type: 'ChangeCurrent',
  title,
  body,
});

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
    // @ts-ignore
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
