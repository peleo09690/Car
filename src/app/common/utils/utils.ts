/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RolesModel } from '@common/models';
import { isNull, isUndefined } from 'lodash';
import * as moment from 'moment';

export class Utils {
  public static endTimeISO = 'T23:59:59.999Z';
  public static userLoginLocalStore = 'user_login';

  public static getValueByKey(element: any, keyIn: string): any {
    if (!element) {
      return null;
    }

    // split by +
    const multiKeyArr: Array<any> = keyIn.split('+');
    const finalValue: Array<any> = [];

    multiKeyArr.forEach((eachKey) => {
      // split the key

      const keyArr: Array<any> = this.splitFirstOccur(eachKey, '.');
      // get first

      if (!keyArr) {
        finalValue.push(null);
      }

      if (keyArr.length === 2) {
        // have multiple
        const key = keyArr[0];
        const nextKey = keyArr[1];

        const value = this.processElementKey(element, key, nextKey);

        finalValue.push(value);
      } else if (keyArr.length === 1) {
        // only one left
        const key = keyArr[0];
        const value = this.processElementKey(element, key, null);

        finalValue.push(value);
      } else {
        finalValue.push(null);
      }
    });

    // post recursive processing
    if (finalValue.length <= 1) {
      const combineArr =  finalValue[0];
      let filteredValue;

      if (Array.isArray(combineArr)) {
        filteredValue = combineArr.filter((el) => el !== null);
      } else {
        filteredValue = combineArr;
      }

      return  !isNull(filteredValue) && typeof(filteredValue) !== 'undefined' ? filteredValue.toString() : null ;
    } else if (finalValue.length === 2) { // supporting up to 2 for now
      // split and if only one then merge them
      const array1: any = finalValue[0];
      const array2: any = finalValue[1];

      if (!Array.isArray(array1) && !Array.isArray(array2)) {
        return array1 && array2 ? (array1 + ': ' + array2) : (array1 !== null ? array1 : null);
      } else {
        const combineArr = array1.map((e: any, i: any) => {
          if (array2[i]) { // need to fix this shit up
            return e + ': ' + array2[i];
          } else {
            return e;
          }
        });

        return combineArr.filter((el: any) => el !== null);
      }
    }

    return finalValue.filter((el) => el !== null);
  }

  public static processElementKey(element: any, key: any, nextKey: any): string | null {
    if (key.slice(-1) === ']') {
      // is array slice it apart
      const splitKey = key.split('[');

      const keyId = splitKey[0];
      const arrNumber = splitKey[1].slice(0, -1);

      if (arrNumber === 'all') {
        // loop and print all
        const value: any = [];

        if (!element[keyId]) {
          return null;
        }

        element[keyId].forEach((el: any) => {
          value.push(nextKey ? this.getValueByKey(el, nextKey) : el);
        });

        return value;
      } else {
        return nextKey ? this.getValueByKey(element[keyId] ? element[keyId][arrNumber] : null, nextKey) :
          element[keyId] ? element[keyId][arrNumber] : null;
      }
    } else {
      return nextKey ? this.getValueByKey(element[key], nextKey) : element[key];
    }
  }

  public static splitFirstOccur(str: any, spliyBy: any): any[] {
    const keyArr = [];
    const first = str.substr(0, str.indexOf(spliyBy));

    if (first) {
      keyArr.push(first);
    }

    const second = str.substr(str.indexOf(spliyBy) + 1);

    if (second) {
      keyArr.push(second);
    }

    return keyArr;
  }

  public static isDate(input: any): boolean {
    if (Object.prototype.toString.call(input) === '[object Date]') {
      return true;
    }

    return false;
  }

  // check validate date
  public static validDate(date: any): boolean {
    if (moment(date, 'YYYY/MM/DD', true).isValid()) {
      date = date.split('/');
      const dd = +date[0];
      const mm = +date[1];
      const yy = +date[2];
      const listofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (mm === 1 || mm > 2) {
        if (dd > listofDays[mm - 1]) {
          new Error('Invalid date format!');

          return false;
        }
      }

      if (mm === 2) {
        let leapYear = false;

        if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
          leapYear = true;
        }

        if ((leapYear === false) && (dd >= 29)) {
          new Error('Invalid date format!');

          return false;
        }

        if ((leapYear === true) && (dd > 29)) {
          new Error('Invalid date format!');

          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  public static formatZeroFill(value: number, type: number): string {
    return value.toString().padStart(type, '0');
  }

  public static validateFaxPhonePostCode(control: AbstractControl): null | object {
    let val = control.value ? control.value.toString().replace(/-/g, '') : '';

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidFaxPhonePostCode': true };

    return null;
  }

  public static checkMail(control: AbstractControl): null | object {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^([a-z0-9A-Z](\.?[a-z0-9A-Z]){1,})\@\w+([\.-]?\w+)(\.\w{2,3})+$/)) return { 'invalidMail': true };

    return null;
  }
  public static checkCode(control: AbstractControl): null | object {
    let val = control.value;

    if (val === null || val === '') return null;

    val = val.toString().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    if (val.toString().match(/[^a-zA-Z0-9]/)) return { 'errorFormat': true };

    return null;
  }


  public static convertDateFormat(inputDate: Date, format: 'YYYYMMDD' | 'YYYYMMDDHHMM' | 'YYYYMMDDHHMMSS' | 'YYYYMMDDHHMMSSMS', separator: string = '/'): string {

    let year = inputDate.getFullYear();
    let month = inputDate.getMonth() < 9 ? '0' + (inputDate.getMonth() + 1) : (inputDate.getMonth() + 1); // getMonth() is zero-based
    let date = inputDate.getDate() < 10 ? '0' + inputDate.getDate() : inputDate.getDate();
    let hours = inputDate.getHours() < 10 ? '0' + inputDate.getHours() : inputDate.getHours();
    let minutes = inputDate.getMinutes() < 10 ? '0' + inputDate.getMinutes() : inputDate.getMinutes();
    let seconds = inputDate.getSeconds() < 10 ? '0' + inputDate.getSeconds() : inputDate.getSeconds();
    const miliSeconds = inputDate.getMilliseconds();

    switch (format) {
      case 'YYYYMMDD':
        return [year, month, date].join(separator);

      case 'YYYYMMDDHHMM':
        return [year, month, date].join(separator) + ' ' + [hours, minutes].join(':');

      case 'YYYYMMDDHHMMSS':
        return [year, month, date].join(separator) + ' ' + [hours, minutes, seconds].join(':');

      case 'YYYYMMDDHHMMSSMS':
        return [year, month, date].join(separator) + ' ' + [hours, minutes, seconds].join(':') + '.' + miliSeconds;

      default:
        return inputDate.toString();
    }
  }

  public static formatDateTimeToTime(date: string): string {
    let d = new Date(Date.parse(date));

    return d.getTime().toString();
  }

  public static checkPermission(): boolean {
    return JSON.parse(localStorage.getItem('user_login') || '{}').roles[0].role !== RolesModel.ADMIN ? true : false;
  }

  public static JsonToString(object: object): string {
    return object && JSON.stringify(object);
  }

  public static checkNumberic(control: AbstractControl): null | object {
    let val = control.value;

    if (val === null || val === '') return null;

    if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };

    return null;
  }
  public static checkFromValue(formControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let val = control.value;

      control.parent?.get(formControlName)?.setErrors(null);

      if (val === null || val === '') return null;


      if (control.parent?.get(formControlName)?.getRawValue() === null || control.parent?.get(formControlName)?.getRawValue() === '') return null;

      if (val > control.parent?.get(formControlName)?.getRawValue())
      {
        control.parent?.get(formControlName)?.setErrors({ 'dateInvalidTo': true });

        return { 'dateInvalidFrom': true };
      }

      return null;
    };
  }
  public static checkToValue(formControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let val = control.value;

      control.parent?.get(formControlName)?.setErrors(null);

      if (val === null || val === '') return null;


      if (control.parent?.get(formControlName)?.getRawValue() === null || control.parent?.get(formControlName)?.getRawValue() === '') return null;

      if (control.parent?.get(formControlName)?.getRawValue() > val)
      {
        control.parent?.get(formControlName)?.setErrors({ 'dateInvalidTo': true });

        return { 'dateInvalidTo': true };
      }

      return null;
    };
  }
  public static checkFromDate(formControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let val = control.value;

      control.parent?.get(formControlName)?.setErrors(null);

      if (val === null || val === '') return null;


      if (control.parent?.get(formControlName)?.getRawValue() === null || control.parent?.get(formControlName)?.getRawValue() === '') return null;

      if ((new Date(val)) > (new Date(control.parent?.get(formControlName)?.getRawValue())))
      {
        control.parent?.get(formControlName)?.setErrors({ 'dateInvalidTo': true });

        return { 'dateInvalidFrom': true };
      }

      return null;
    };
  }
  public static checkToDate(formControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let val = control.value;

      control.parent?.get(formControlName)?.setErrors(null);

      if (val === null || val === '') return null;


      if (control.parent?.get(formControlName)?.getRawValue() === null || control.parent?.get(formControlName)?.getRawValue() === '') return null;

      if ((new Date(control.parent?.get(formControlName)?.getRawValue())) > (new Date(val)))
      {
        control.parent?.get(formControlName)?.setErrors({ 'dateInvalidTo': true });

        return { 'dateInvalidTo': true };
      }

      return null;
    };
  }

  public static coverStringToInt(value:string):number{
    return typeof(value) === 'number' ? parseInt(value): 0;
  }

  public static getMessError(error: ValidationErrors | null | undefined, fieldName?: string): string {
    if (!error) return '';


    let key = Object.keys(error).toString().split(',')[0];
    let mess = '';

    switch (key) {

      case 'invalidFaxPhonePostCode':
        mess = 'common.message.error-data-format';
        break;

      case 'postcode':
        mess = 'common.message.error-zipcode';
        break;

      case 'errorFormat':
        mess = 'common.message.error-data-format';
        break;

      case 'notMatch':
        mess = 'common.message.password-not-match';
        break;

      case 'minlength':
        mess = 'common.message.error-data-format';
        break;

      case 'invalidNumber':
        mess = 'common.message.error-data-format';
        break;

      case 'invalidMail':
        mess = 'common.message.error-data-format';
        break;

      case 'email':
        mess = 'common.message.error-data-format';
        break;

      case 'validPassword':
        mess = 'common.message.error-data-format';
        break;

      case 'required':
        mess = 'common.message.error-required';
        break;

      case 'matDatepickerParse':
        mess = 'common.message.error-data-format';
        break;

      case 'matDatepickerMin':
        mess = 'common.message.error-data-format';
        break;

      case 'requireLogin':
        mess = 'common.message.login-infor-required';
        break;

      case 'maxlength':
        mess = 'common.message.error-maxlenght';
        break;

      case 'existing':
        mess = 'common.message.data-existed';
        break;

      case 'emailNotExisted':
        mess = 'common.message.email-not-existed';
        break;

      case 'emailExisted':
        mess = 'common.message.email-existed';
        break;

      case 'dateInvalidFrom':
        mess = `${fieldName}Fromは${fieldName}To以下の値を指定してください。`;
        break;

      case 'dateInvalidTo':
        mess = `${fieldName}Toは${fieldName}From以上の値を指定してください。`;
        break;

      case 'notFound':
        mess = 'common.message.not-existed';
        break;

      case 'passwordWrong':
        mess = 'common.message.password-wrong';
        break;

      case 'passwordDuplicate':
        mess = 'common.message.password-duplicate';
        break;
    }

    return mess;
  }

  public static validHalfWidth(control: AbstractControl): null | object {
    let val = control.value;

    if (val === null || val === '') return null;

    if (val.toString().match(/[^a-zA-Z0-9]/)) return { 'errorFormat': true };

    return null;
  }

  public static validHalfSize(control: AbstractControl): null | object {
    let val = control.value;

    if (val === null || val === '') return null;

    if (val.toString().match(/[^\w!@#$%^&*(),.?":{}[\]\`\~\_\+\=\-\/\\;'|<>]/)) return { 'errorFormat': true };

    return null;
  }
}
