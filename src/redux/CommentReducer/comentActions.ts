// @ts-nocheck
import { Create } from './../../API/commentApi.ts';
import { GetOne, UpDate } from './../../API/postApi.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SubmitPostType, SubmitCommentType } from './commentReducerTypes.ts';

export const FetchCurrentThunk = createAsyncThunk(
  'coment/fetchCurrent',
  async (id: number, thunkAPI) => {
    try {
      const response = await GetOne(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Не удалось получить пост произошла ошибка: ${e.message}`,
      );
    }
  },
);
type dataType = {
  id: number;
  post: SubmitPostType;
};

export const ChangeCurrentThunk = createAsyncThunk(
  'coment/changeCurrent',
  async (data: dataType, thunkAPI) => {
    const { id, post } = data;

    try {
      const response = await UpDate(Number(id), post);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Не удалось изменить пост произошла ошибка: ${e.message}`,
      );
    }
  },
);

export const CreateCommentThunk = createAsyncThunk(
  'coment/createComent',
  async (coment: SubmitCommentType, thunkAPI) => {
    try {
      const response = await Create(coment);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Не удалось получить пост произошла ошибка: ${e.message}`,
      );
    }
  },
);
