import { Theme } from './theme';


export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: {
    themes: string;
    posts: string;
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updatedAt: string;
    __v: number;
  };
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}
