import { CurrentPostType } from '../../Models/models';

export type InitialStateType = {
  CurrentPost: CurrentPostType;
  isLoading: boolean;
  error: string;
};
