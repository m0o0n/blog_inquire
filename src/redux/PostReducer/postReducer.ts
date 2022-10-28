// @ts-nocheck
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialStateType } from './postReducerTypes.ts';
import { PostType } from '../../Models/models.ts';
import {
  CreatePostThunk,
  DeletePostThunk,
  FetchPostsThunk,
} from './PostActions.ts';

import { SubmitPostType } from '../CommentReducer/commentReducerTypes.ts';

const initialState: InitialStateType = {
  Posts: [
    {
      id: 0,
      title: 'In quibusdam tempore odit est dolorem',
      // eslint-disable-next-line max-len
      body: 'Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio',
    },
  ],
  isLoading: false,
  error: '',
};

const PostsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    // FetchPosts
    [FetchPostsThunk.pending.type]: state => {
      state.isLoading = true;
    },
    [FetchPostsThunk.fulfilled.type]: (
      state,
      action: PayloadAction<PostType[]>,
    ) => {
      state.Posts = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [FetchPostsThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // CreatePost
    [CreatePostThunk.pending.type]: state => {
      state.isLoading = true;
    },
    [CreatePostThunk.fulfilled.type]: (
      state,
      action: PayloadAction<SubmitPostType>,
    ) => {
      state.isLoading = false;
      state.Posts = [...state.Posts, action.payload];
    },
    [CreatePostThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // DeletePost
    [DeletePostThunk.pending.type]: state => {
      state.isLoading = true;
    },
    [DeletePostThunk.fulfilled.type]: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.Posts = state.Posts.filter((post: PostType) => {
        return post.id !== action.payload;
      });
    },
    [DeletePostThunk.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// const PostsReducer = (
//   state: InitialStateType = InitialState,
//   action: ActionTypes,
// ): InitialStateType => {
//   switch (action.type) {
//     case 'FetchPosts':
//       return {
//         ...state,
//         Posts: [...action.post],
//       };
//     case 'CreatePost':
//       return {
//         ...state,
//         Posts: [...state.Posts, action.post],
//       };
//     case 'DeletePost':
//       return {
//         ...state,
//         Posts: state.Posts.filter(p => p.id !== action.id),
//       };
//     default:
//       return state;
//   }
// };

// const FetchPostsAC = (post: Array<PostType>): FetchPostsACType => ({
//   type: 'FetchPosts',
//   post,
// });

// const CreatePostAC = (post: PostType): CreatePostACType => ({
//   type: 'CreatePost',
//   post,
// });

// const DeletePostAC = (id: number): DeletePostACType => ({
//   type: 'DeletePost',
//   id,
// });

// export const FetchPostsThunk = (): ThunkType => {
//   return async dispatch => {
//     const posts = await GetAll();
//     dispatch(FetchPostsAC(posts));
//   };
// };

// export const CreatePostThunk = (post: PostType): ThunkType => {
//   return async dispatch => {
//     const response = await CreatePost(post);
//     // @ts-ignore
//     dispatch(reset('AddPost'));
//     dispatch(
//       CreatePostAC({
//         id: response.id,
//         title: response.title,
//         body: response.body,
//       }),
//     );
//   };
// };

// export const DeletePostThunk = (id: number): ThunkType => {
//   return async dispatch => {
//     await Delete(id);
//     dispatch(DeletePostAC(id));
//   };
// };

export default PostsReducer.reducer;
