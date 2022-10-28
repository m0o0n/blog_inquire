// @ts-nocheck

// eslint-disable-next-line max-len
import { SubmitCommentType } from './../redux/CommentReducer/commentReducerTypes.ts';
// @ts-ignore
import $HostInstance from './api.ts';

export const Create = async (comment: SubmitCommentType) => {
  const { data } = await $HostInstance.post<SubmitCommentType>(
    'comments',
    comment,
  );
  return data;
};
