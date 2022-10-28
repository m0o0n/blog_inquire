// @ts-ignore
import { PostType } from '../../Models/models.ts';

export type InitialStateType = {
  Posts: Array<PostType>;
  isLoading: boolean;
  error: string;
};
