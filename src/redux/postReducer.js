import { GetAll, CreatePost, Delete } from '../API/postApi';
import { reset } from 'redux-form';
const InitialState = {
  Posts: [
    {
      id: 0,
      title: 'In quibusdam tempore odit est dolorem',
      // eslint-disable-next-line max-len
      body: 'Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio',
    },

  ],
  NewPostText: '',
};

const PostsReducer =(state = InitialState, action)=>{
  switch (action.type) {
    case 'FetchPosts':
      return {
        ...state,
        Posts: [...action.post],
      };
    case 'CreatePost':
      return {
        ...state,
        Posts: [...state.Posts, action.post],
      };
    case 'DeletePost':
      return {
        ...state,
        Posts: state.Posts.filter(p =>
          p.id !== action.id,
        ),
      };
    default: return state;
  }
};

const FetchPostsAC =(post)=>({ type: 'FetchPosts', post });
const CreatePostAC =(post)=>({ type: 'CreatePost', post });
const DeletePostAC =(id)=>({ type: 'DeletePost', id });

export const FetchPostsThunk =()=>{
  return async (dispatch)=>{
    const posts = await GetAll();
    dispatch(FetchPostsAC(posts));
  };
};


export const CreatePostThunk =(post)=>{
  return async (dispatch)=>{
    const response = await CreatePost(post);
    dispatch(reset('AddPost'));
    dispatch(CreatePostAC({
      id: response.id,
      title: response.title,
      body: response.body }));
  };
};

export const DeletePostThunk =(id)=>{
  return async (dispatch)=>{
    await Delete(id);
    dispatch(DeletePostAC(id));
  };
};


export default PostsReducer;
