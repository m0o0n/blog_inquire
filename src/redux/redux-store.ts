import { configureStore, combineReducers } from '@reduxjs/toolkit';
// @ts-ignore
import PostsReducer from './PostReducer/postReducer.ts';
import { reducer as formReducer } from 'redux-form';
// @ts-ignore
import comentReducer from './CommentReducer/comentReducer.ts';
const reducers = combineReducers({
  Posts: PostsReducer,
  Comments: comentReducer,
  form: formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: reducers,
  });
};
export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
