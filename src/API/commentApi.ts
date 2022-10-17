import { SubmitCommentType } from './../redux/comentReducer';
// @ts-ignore
import $HostInstance from './api.ts';

export const Create = async (comment: SubmitCommentType) => {
  const { data } = await $HostInstance.post<SubmitCommentType>(
    'comments',
    comment,
  );
  return data;
};
