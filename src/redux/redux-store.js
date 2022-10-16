import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMidleWare from 'redux-thunk';
import PostsReducer from './postReducer';
import { reducer as formReducer } from 'redux-form';
import comentReducer from './comentReducer';
const reducers = combineReducers({
  Posts: PostsReducer,
  Comments: comentReducer,
  form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMidleWare)),
);
export default store;
