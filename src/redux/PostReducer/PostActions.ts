// @ts-nocheck
import { SubmitPostType } from './../../Models/models.ts';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreatePost, Delete, GetAll } from '../../API/postApi.ts';
export const FetchPostsThunk = createAsyncThunk(
  'posts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = GetAll();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Не вышло получить список постов, произошла ошибка: ${e.message}`,
      );
    }
  },
);

export const CreatePostThunk = createAsyncThunk(
  'posts/сreatePost',
  async (post: SubmitPostType, thunkAPI) => {
    try {
      const response = CreatePost(post);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Не удалось создать пост, произошла ошибка: ${e.message}`,
      );
    }
  },
);

export const DeletePostThunk = createAsyncThunk(
  'posts/deletePost',
  async (id: number, thunkAPI) => {
    try {
      await Delete(id);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        `Не удалось создать пост, произошла ошибка: ${e.message}`,
      );
    }
  },
);
