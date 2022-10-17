import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMidleWare from 'redux-thunk';
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
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMidleWare)),
);
export default store;
