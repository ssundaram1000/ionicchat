import {User} from "../../models/user/user.interface";

const userList: User[] = [
  { firstName: 'Paul', lastName: 'Halliday', avatar: 'assets/imgs/avatar.png', email: 'paul@paul.com' },
  { firstName: 'John', lastName: 'Doe', avatar: 'assets/imgs/avatar.png', email: 'john@john.com' },
  { firstName: 'Sarah', lastName: 'Smith', avatar: 'assets/imgs/avatar.png', email: 'sarah@sarah.com' },
  { firstName: 'Roger', lastName: 'Reynolds', avatar: 'assets/imgs/avatar.png', email: 'roger@roger.com' }
];

export const USER_LIST = userList;
