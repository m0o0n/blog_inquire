// @ts-nocheck
import { SubmitCommentType } from './commentReducerTypes.ts';
import { FetchCurrentThunk, ChangeCurrentThunk } from './comentActions.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType, SubmitPostType } from './commentReducerTypes.ts';
import { CurrentPostType } from './commentReducerTypes.ts';
import { CreateCommentThunk } from './comentActions.ts';

const initialState: InitialStateType = {
  CurrentPost: {
    id: 0,
    title: '',
    body: '',
    comments: [],
  },
  isLoading: false,
  error: '',
};
const comentReducer = createSlice({
  name: 'coment',
  initialState,
  reducers: {},
  extraReducers: {
    [FetchCurrentThunk.pending.type]: state => {
      state.isLoading = true;
    },
    [FetchCurrentThunk.fulfilled.type]: (
      state,
      action: PayloadAction<CurrentPostType>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.CurrentPost = action.payload;
    },
    [FetchCurrentThunk.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [ChangeCurrentThunk.pending.type]: state => {
      state.isLoading = true;
    },
    [ChangeCurrentThunk.fulfilled.type]: (
      state,
      action: PayloadAction<SubmitPostType>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.CurrentPost.id = action.payload.id;
      state.CurrentPost.title = action.payload.title;
      state.CurrentPost.body = action.payload.body;
    },
    [ChangeCurrentThunk.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [CreateCommentThunk.pending.type]: state => {
      state.isLoading = true;
    },
    [CreateCommentThunk.fulfilled.type]: (
      state,
      action: PayloadAction<SubmitCommentType>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.CurrentPost.comments = [
        ...state.CurrentPost.comments,
        action.payload,
      ];
    },
    [CreateCommentThunk.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const comentReducer = (
//   state = InitialState,
//   action: ActionTypes,
// ): InitialStateType => {
//   switch (action.type) {
//     case 'FetchCurrent':
//       return {
//         ...state,
//         CurrentPost: {
//           id: action.id,
//           title: action.title,
//           body: action.body,
//           comments: [...action.comments],
//         },
//       };
//     case 'ChangeCurrent':
//       return {
//         ...state,
//         CurrentPost: {
//           id: state.CurrentPost.id,
//           title: action.title,
//           body: action.body,
//           comments: [...state.CurrentPost.comments],
//         },
//       };
//     case 'CreateComment':
//       return {
//         ...state,
//         CurrentPost: {
//           id: state.CurrentPost.id,
//           title: state.CurrentPost.title,
//           body: state.CurrentPost.body,
//           comments: [...state.CurrentPost.comments, action.body],
//         },
//       };
//     default:
//       return state;
//   }
// };

// const CreateCommentAC = (body: CommentsType): CreateCommentACType => ({
//   type: 'CreateComment',
//   body,
// });

// const FetchCurrentAC = (
//   id: number,
//   title: string,
//   body: string,
//   comments: Array<CommentsType>,
// ): FetchCurrentACType => ({
//   type: 'FetchCurrent',
//   id,
//   title,
//   body,
//   comments,
// });

export default comentReducer.reducer;
