import { ISideMenuNode } from '../../layout/models/menu.model';

export const MENU_DATA: Array<ISideMenuNode> = [
  {
    id: '1',
    icon: '',
    category: 'master',
    name: 'common.menu.master.name',
    route: '/master',
    order: 1,
    level: 1,
    children: [
      {
        level: 2,
        id: '101',
        icon: 'icon-company',
        category: 'master',
        name: 'common.menu.master.company',
        route: '/master/company',
        order: 1,
        children: [],
        role: 'ADMIN'
      },
      {
        level: 2,
        id: '102',
        icon: 'icon-user-list',
        category: 'master',
        name: 'common.menu.master.user',
        route: '/master/user',
        order: 2,
        children: [],
        role: 'ADMIN'
      },
        // {
        //   id: '103',
        //   level: 2,
        //   icon: 'icon-owner',
        //   category: 'master',
        //   name: 'common.menu.master.owner',
        //   route: '/master/xxx',
        //   order: 3,
        //   children: []
        // },
      {
        id: '104',
        level: 2,
        icon: 'icon-team',
        category: 'master',
        name: 'common.menu.master.customer',
        route: '/master/customer',
        order: 4,
        children: []
      },
      {
        id: '106',
        level: 2,
        icon: 'icon-supplier',
        category: 'master',
        name: 'common.menu.master.supplier',
        route: '/master/supplier',
        order: 6,
        children: []
      },
      {
        id: '108',
        level: 2,
        icon: 'icon-product',
        category: 'master',
        name: 'common.menu.master.product',
        route: '/master/product',
        order: 8,
        children: []
      },
      {
        id: '109',
        level: 2,
        icon: 'icon-grid',
        category: 'master',
        name: 'common.menu.master.set-product-composition',
        route: '/master/set-product',
        order: 9,
        children: []
      },
      {
        id: '111',
        level: 2,
        icon: 'icon-money',
        category: 'master',
        name: 'common.menu.master.unit-sales-price',
        route: '/master/sales-unit-price',
        order: 11,
        children: []
      },
      {
        id: '112',
        level: 2,
        icon: 'icon-money',
        category: 'master',
        name: 'common.menu.master.purchase-price-unit',
        route: '/master/purchase-unit-price',
        order: 12,
        children: []
      },
      {
        id: '113',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-1',
        route: '/master/product-category-01',
        order: 13,
        children: []
      },
      {
        id: '114',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-2',
        route: '/master/product-category-02',
        order: 14,
        children: []
      },
      {
        id: '115',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-3',
        route: '/master/product-category-03',
        order: 15,
        children: []
      },
      {
        id: '116',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-4',
        route: '/master/product-category-04',
        order: 16,
        children: []
      },
      {
        id: '117',
        level: 2,
        icon: 'icon-product-2d',
        category: 'master',
        name: 'common.menu.master.product-category-5',
        route: '/master/product-category-05',
        order: 17,
        children: []
      },
      {
        id: '118',
        level: 2,
        icon: 'icon-repository',
        category: 'master',
        name: 'common.menu.master.repository',
        route: '/master/repository',
        order: 18,
        children: []
      },
      {
        id: '119',
        level: 2,
        icon: 'icon-location',
        category: 'master',
        name: 'common.menu.master.location',
        route: '/master/location',
        order: 19,
        children: []
      },
      {
        id: '120',
        level: 2,
        icon: 'icon-coins',
        category: 'master',
        name: 'common.menu.master.unit',
        route: '/master/unit',
        order: 20,
        children: []
      }
    ]
  },
  {
    id: '2',
    icon: '',
    category: 'goods-receipt',
    name: 'common.menu.goods-receipt.name',
    route: '/goods-receipt/xxx',
    order: 2,
    level: 1,
    children: [
      {
        id: '201',
        level: 2,
        icon: 'icon-news-paper',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.enter-warehousing-schedule',
        route: '/goods-receipt/xxx',
        order: 1,
        children: []
      },
      {
        id: '202',
        level: 2,
        icon: 'icon-lock',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.scheduled-warehousing-closed',
        route: '/goods-receipt/xxx',
        order: 2,
        children: []
      },
      {
        id: '203',
        level: 2,
        icon: 'icon-pen',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.receipt-record',
        route: '/goods-receipt/xxx',
        order: 3,
        children: []
      },
      {
        id: '204',
        level: 2,
        icon: 'icon-pen-edit',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.receipt-record-correction',
        route: '/goods-receipt/xxx',
        order: 4,
        children: []
      },
      {
        id: '205',
        level: 2,
        icon: 'icon-pen',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.return-warehousing-record-registration',
        route: '/goods-receipt/xxx',
        order: 5,
        children: []
      },
      {
        id: '206',
        level: 2,
        icon: 'icon-pen-edit',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.returned-goods-receipt-record-correction',
        route: '/goods-receipt/xxx',
        order: 6,
        children: []
      },
      {
        id: '207',
        level: 2,
        icon: 'icon-adjust',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.order-maintenance',
        route: '/goods-receipt/xxx',
        order: 7,
        children: []
      },
      {
        id: '208',
        level: 2,
        icon: 'icon-report-page',
        category: 'goods-receipt',
        name: 'common.menu.goods-receipt.report-list',
        route: '/goods-receipt/xxx',
        order: 8,
        children: []
      }
    ]
  }
];

export const MENU_DATA_SYSTEM: Array<ISideMenuNode> = [
  {
    id: '1',
    icon: '',
    category: 'master',
    name: 'common.menu.master.name',
    route: '/master',
    order: 1,
    level: 1,
    children: [
      {
        id: '101',
        level: 1,
        icon: 'icon-team',
        category: 'master',
        name: 'common.menu.master.user',
        route: '/system/user',
        order: 1,
        children: []
      }
    ]
  }
];
