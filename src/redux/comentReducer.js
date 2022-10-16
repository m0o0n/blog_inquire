import { Create } from '../API/commentApi';
import { GetOne } from '../API/postApi';
import { UpDate } from '../API/postApi';
import { reset } from 'redux-form';
const InitialState = {
  CurrentPost: {
    id: 0,
    title: '',
    body: '',
    comments: [],
  },
};

const comentReducer =(state = InitialState, action)=>{
  switch (action.type) {
    case 'FetchCurrent':
      return {
        ...state,
        CurrentPost: {
          id: action.id,
          title: action.title,
          body: action.body,
          comments: [...action.comments] },
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
          comments:
            [...state.CurrentPost.comments, action.body] },
      };
    default: return state;
  }
};

const CreateCommentAC =(body)=>({ type: 'CreateComment', body });
const FetchCurrentAC =(id, title, body, comments)=>({
  type: 'FetchCurrent',
  id,
  title,
  body,
  comments,
});

export const ChangeCurrentAC =(title, body)=>({
  type: 'ChangeCurrent',
  title,
  body,
});


export const FetchCurrentThunk =(id)=>{
  return async (dispatch)=>{
    const current = await GetOne(id);
    dispatch(
        FetchCurrentAC(
            current.id,
            current.title,
            current.body,
            current.comments,
        ),
    );
  };
};

export const ChangeCurrentThunk =(id, post)=>{
  return async (dispatch)=>{
    const response = await UpDate(id, post);

    dispatch(ChangeCurrentAC(response.title, response.body));
  };
};


export const CreateCommentThunk =(comment)=>{
  return async (dispatch)=>{
    const response = await Create(comment);
    dispatch(reset('AddComment'));
    dispatch(CreateCommentAC({
      id: response.id, postId: response.postId, body: response.body }));
  };
};


export default comentReducer;

