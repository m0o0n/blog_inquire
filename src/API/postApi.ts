import { PostType } from './../redux/postReducer';
import { SubmitPostType } from './../redux/comentReducer';
// @ts-ignore
import $HostInstance from './api.ts';

export const GetAll = async () => {
  const { data } = await $HostInstance.get<Array<PostType>>('posts');
  return data;
};

export const GetOne = async (id: number) => {
  const { data } = await $HostInstance.get(`posts/${id}?_embed=comments`);
  return data;
};

type CreatePostType = {
  id: number;
  title: string;
  body: string;
};
export const CreatePost = async (post: SubmitPostType) => {
  const { data } = await $HostInstance.post<CreatePostType>('posts', post);

  return data;
};
type UpDateType = {
  id: number;
  title: string;
  body: string;
};
export const UpDate = async (id: string, post: SubmitPostType) => {
  const { data } = await $HostInstance.put<UpDateType>(`posts/${id}`, post);

  return data;
};

export const Delete = async (id: string) => {
  const { data } = await $HostInstance.delete<any>(`posts/${id}`);
  return data;
};
