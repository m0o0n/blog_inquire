export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type CommentsType = {
  id: number;
  postId: number;
  body: string;
};

export type CurrentPostType = {
  id: number;
  title: string;
  body: string;
  comments: Array<CommentsType>;
};

export type SubmitPostType = {
  title: string;
  body: string;
};

export type SubmitCommentType = {
  postId: number;
  body: string;
};
