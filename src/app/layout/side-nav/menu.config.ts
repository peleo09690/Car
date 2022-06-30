import { ISideMenuNode } from "../models/menu.model";

export const MenuData: Array<ISideMenuNode> = [
  {
    id: '1',
    icon:'',
    category: '',
    name: '入庫',
    route: '/',
    order: 1,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/user',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '3 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '4 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '5 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '6 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '7 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '8 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '9 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'',
        category: 'users',
        name: '10 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '2',
    category: '',
    name: '出庫',
    route: '/login',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '3',
    category: 'role',
    name: '在庫',
    route: '/login',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '4',
    category: 'role',
    name: '棚卸',
    route: '/role',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '5',
    category: 'role',
    name: '日次',
    route: '/role',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },

  {
    id: '6',
    category: 'role',
    name: 'マスタ',
    route: '/role',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '7',
    category: 'role',
    name: 'EDI',
    route: '/role',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  },
  {
    id: '8',
    category: 'role',
    name: 'Roles8',
    icon:'iconBntPlus',
    route: '/role',
    order: 2,
    level: 1,
    children: [
    ]
  },
  {
    id: '8',
    category: 'role',
    name: 'Roles8',
    route: '/role',
    order: 2,
    level: 1,
    children: [
      {
        id: '11',
        icon:'iconBntPlus',
        category: 'users',
        name: '1 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      },
      {
        id: '11',
        icon:'iconLogomenu',
        category: 'users',
        name: '2 User',
        route: '/users',
        order: 1,
        level: 2,
        children: []
      }
    ]
  }


];
