import { ISideMenuNode } from "../models/menu.model";

export const MenuData: Array<ISideMenuNode> = [
  {
    id: '1',
    icon:'',
    category: '',
    name: 'MENU 1',
    route: '/',
    order: 1,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: 'User',
        route: '/user',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '12',
        icon:'iconLogomenu',
        category: 'defaul-layout',
        name: 'Defaul Layout',
        route: '/defaul-layout',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '3 User',
        route: '/users1',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '4 User',
        route: '/users1',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '2',
    category: '',
    name: 'MENU 2',
    route: '/login',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users1',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users1',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '3',
    category: 'role',
    name: 'Menu3',
    route: '',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users1',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users1',
        order: 1,
        level: 2,
        children: []
      }
    ]
  }
];
