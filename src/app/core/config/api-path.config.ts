export const ApiPathConfig = {
  auth: {
    login: '/oauth/token',
    detailUser: '/oauth/user_login',
    logOut: '/oauth/logout',
    changePassword: '/oauth/change-pass',
    forgotPassword: '/oauth/forget-password'
  },
  service: {
    dialogSeach:{
      dialogCommon: '/api/common/dialog-common',
      getProductBySet:'/api/product-by-set',
      getProductChild:'/api/product-child'
    }
  },
  user: {
    user: '/api/user',
    sendMail: '/api/user/send-mail',
    exportCSV: '/api/user/downloadCSV'
  },
  common: {
    zipcode: '/api/common/zip-code'
  },
  master: {
    company: '/api/company',
    exportCSVcompany: '/api/company/downloadCSV',
    exportCSVrepository: '/api/repository/downloadCSV',
    repository: '/api/repository',
    user: '/api/user',
    categoryDetail: '/api/category-detail',
    productCategory: '/api/category',
    productCategoryCSV: '/api/category/downloadCSV',
    supplier: '/api/supplier',
    supplierDeliveryDest: '/api/supplier-dest',
    route: '/api/route',
    course: '/api/course',
    salesUnitPrice: '/api/sales-unit-price',
    productCode: '/api/productCode',
    customerCode: '/api/customerCode',
    exportCSVSales: '/api/sales-unit-price/downloadCSV',
    purchasePriceUnit: '/api/purchase-unit-price',
    exportCSVPurchase: '/api/purchase-unit-price/downloadCSV',
    supplierCode: '/api/supplierCode',
    location: '/api/master-location',
    exportCSVLocation: '/api/location/downloadCSV',
    exportCSVsupplier: '/api/supplier/downloadCSV',
    supplierCheckCode: '/api/supplier-code',
    supplierDestinationCode: '/api/supplier-dest-code',
    checklocation: '/api/check-location',
    product: '/api/product',
    checkProductCode: '/api/product-code',
    productCSV: '/api/product/downloadCSV',
    customer: '/api/customer',
    customerDeliveryDest: '/api/customer-dest',
    exportCSVCustomer: '/api/customer/downloadCSV',
    customerCheckCode: '/api/customer-code',
    customerDestinationCode: '/api/customer-dest-code',
    repositoryCheckDuplicate: '/api/repository/check-duplicate-repository',
    unit: '/api/unit-name',
    detailUnitName: '/api/unit-by-name',
    unitCodeCheck: '/api/unit-name/check',
    exportCSVUnit: '/api/unit-name/downloadCSV',
    exportCSVsupplierDest: '/api/supplier-dest/downloadCSV',
    exportCSVcustomerDest:'/api/customer-dest/downloadCSV',
    setProduct: '/api/set-product'
  },
  system: {
    user: '/api/user/system',
    userCsv: '/api/system/downloadCSV',
    productCategory: '/api/category'
  }
};
