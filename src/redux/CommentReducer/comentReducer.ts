// @ts-nocheck
import { SubmitCommentType } from './commentReducerTypes.ts';
import { FetchCurrentThunk, ChangeCurrentThunk } from './comentActions.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType } from './commentReducerTypes.ts';
import { SubmitPostType } from '../../Models/models.ts';
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

export default comentReducer.reducer;
