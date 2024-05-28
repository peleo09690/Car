/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import puppeteer from 'puppeteer';

@Injectable({
  providedIn: 'root'
})
export class InstallmentPriceService {

public constructor(private httpClient :HttpClient) { }

public getCar(id:string) {
  const formData = new FormData();
  formData.append('estimate',"getCar");
  formData.append('id', id);

   return this.httpClient.post<any>(`https://oto360.net/du-toan`, formData);
  
}

public getOption(id:string) {
  const formData = new FormData();
  formData.append('estimate',"getOption");
  formData.append('id', id);

   return this.httpClient.post<any>(`https://oto360.net/du-toan`, formData);
}

public getCalculator(idcar:string, idOption : string, idProvince :string) {
  const formData = new FormData();
  formData.append('estimate',"calculator");
  formData.append('car', idcar);
  formData.append('option', idOption);
  formData.append('province', idProvince);

   return this.httpClient.post<any>(`https://oto360.net/du-toan`, formData);
}

}
