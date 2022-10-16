import $HostInstance from './api';

export const Create = async (comment) => {
  const { data } = await $HostInstance.post('comments', comment);
  return data;
};
