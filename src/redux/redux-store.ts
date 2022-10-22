import { configureStore, combineReducers } from '@reduxjs/toolkit';

// @ts-ignore
import logger from 'redux-logger';
// @ts-ignore
import PostsReducer from './postReducer.ts';
import { reducer as formReducer } from 'redux-form';
// @ts-ignore
import comentReducer from './comentReducer.ts';
const reducers = combineReducers({
  Posts: PostsReducer,
  Comments: comentReducer,
  form: formReducer,
});
export type RootState = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export type AppDispatch = typeof store.dispatch;
export default store;
