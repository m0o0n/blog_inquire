import $HostInstance from './api';

export const GetAll = async () => {
  const { data } = await $HostInstance.get('posts');
  return data;
};

export const GetOne = async id => {
  const { data } = await $HostInstance.get(`posts/${id}?_embed=comments`);
  return data;
};

export const CreatePost = async post => {
  const { data } = await $HostInstance.post('posts', post);
  return data;
};

export const UpDate = async (id, post) => {
  const { data } = await $HostInstance.put(`posts/${id}`, post);
  return data;
};

export const Delete = async id => {
  const { data } = await $HostInstance.delete(`posts/${id}`);
  return data;
};
