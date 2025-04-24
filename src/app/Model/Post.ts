import {User} from './User';

export interface Post {
  user: User,
  text: string,
  code: string
}
