import { environment } from '@env/environment';
import { ApiPathConfig } from '.';

export class ApiPath {
  //AUTH MODULE
  public static LOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.login);
  public static USER_LOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.detailUser);
  public static LOGOUT = environment.API_AUTH.concat(ApiPathConfig.auth.logOut);
  public static CHANGE_PASSWORD = environment.API_AUTH.concat(ApiPathConfig.auth.changePassword);
  public static FORGOT_PASSWORD = environment.API_AUTH.concat(ApiPathConfig.auth.forgotPassword);

  public static CREATE_AND_UPDATE_USER = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static GET_CUSTOMER_INFO = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static DELETE_USER = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static GET_DATA_DIALOG_COMMON = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.dialogCommon);

  // MASTER
  public static COMPANY = environment.API_SERVICE.concat(ApiPathConfig.master.company);
  public static PRODUCT_COMPANY = environment.API_SERVICE.concat(ApiPathConfig.master.productCategory);
  public static REPOSITORY = environment.API_SERVICE.concat(ApiPathConfig.master.repository);
  public static REPOSITORY_CHECK_DUPLICATE = environment.API_SERVICE.concat(ApiPathConfig.master.repositoryCheckDuplicate);
  public static SUPPLIER = environment.API_SERVICE.concat(ApiPathConfig.master.supplier);
  public static SALES_UNIT_PRICE = environment.API_SERVICE.concat(ApiPathConfig.master.salesUnitPrice);
  public static SALES_PRICE_UNIT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVSales);
  public static CUSTOMER = environment.API_SERVICE.concat(ApiPathConfig.master.customer);
  public static UNIT = environment.API_SERVICE.concat(ApiPathConfig.master.unit);
  public static DETAIL_UNIT_NAME = environment.API_SERVICE.concat(ApiPathConfig.master.detailUnitName);
  public static SET_PRODUCT = environment.API_SERVICE.concat(ApiPathConfig.master.setProduct);
  public static UNITCODE_CHECK = environment.API_SERVICE.concat(ApiPathConfig.master.unitCodeCheck);
  public static UNIT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVUnit);
  // PRODUCT ID
  public static PRODUCT_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.productCode);

  public static CUSTOMER_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerCode);
  public static COMPANY_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVcompany);

  // SUPPLIER ID
  public static SUPPLIER_DELIVERY_DEST = environment.API_SERVICE.concat(ApiPathConfig.master.supplierDeliveryDest);
  public static ROUTE = environment.API_SERVICE.concat(ApiPathConfig.master.route);
  public static COURSE = environment.API_SERVICE.concat(ApiPathConfig.master.course);
  public static SUPPLIER_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVsupplier);
  public static SUPPLIER_DEST_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVsupplierDest);
  public static SUPPLIER_CHECK_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.supplierCheckCode);
  public static SUPPLIER_DESTINATION_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.supplierDestinationCode);

  public static REPOSITORY_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVrepository);
  // PURCHASE PRICE UNIT
  public static PURCHASE_PRICE_UNIT = environment.API_SERVICE.concat(ApiPathConfig.master.purchasePriceUnit);
  public static PURCHASE_PRICE_UNIT_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVPurchase);

  // COMMON API
  public static ZIP_CODE = environment.API_SERVICE.concat(ApiPathConfig.common.zipcode);

  // MASTER USER
  public static USER_MASTER = environment.API_SERVICE.concat(ApiPathConfig.master.user);
  public static USER_SEND_MAIL = environment.API_SERVICE.concat(ApiPathConfig.user.sendMail);
  public static USER_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.user.exportCSV);

  // MASTER LOCATION
  public static LOCATION = environment.API_SERVICE.concat(ApiPathConfig.master.location);
  public static CHECKLOCATION = environment.API_SERVICE.concat(ApiPathConfig.master.checklocation);
  public static LOCATION_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVLocation);

  // SYSTEM USER
  public static USER_SYSTEM = environment.API_SERVICE.concat(ApiPathConfig.system.user);
  public static USER_SYSTEM_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.system.userCsv);

  // SUPPLIER ID
  public static SUPPLIER_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.supplierCode);

  // CATEGORY
  public static PRODUCT_CATEGORY = environment.API_SERVICE.concat(ApiPathConfig.master.productCategory);
  public static PRODUCT_CATEGORY_DETAIL = environment.API_SERVICE.concat(ApiPathConfig.master.categoryDetail);
  public static PRODUCT_CATEGORY_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.productCategoryCSV);

  // PRODUCT
  public static PRODUCT_MASTER = environment.API_SERVICE.concat(ApiPathConfig.master.product);
  public static PRODUCT_MASTER_CHECKCODE = environment.API_SERVICE.concat(ApiPathConfig.master.checkProductCode);
  public static PRODUCT_MASTER_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.productCSV);

  // CUSTOMER ID
  public static CUSTOMER_DELIVERY_DEST = environment.API_SERVICE.concat(ApiPathConfig.master.customerDeliveryDest);
  public static CUSTOMER_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVCustomer);
  public static CUSTOMER_CHECK_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerCheckCode);
  public static CUSTOMER_DESTINATION_CODE = environment.API_SERVICE.concat(ApiPathConfig.master.customerDestinationCode);
  public static CUSTOMER_DEST_EXPORT_CSV = environment.API_SERVICE.concat(ApiPathConfig.master.exportCSVcustomerDest);


  //API DIALOG API
  public static GET_PRODUCT_BY_SET = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.getProductBySet);
  public static GET_PRODUCT_CHILD = environment.API_SERVICE.concat(ApiPathConfig.service.dialogSeach.getProductChild);
}
