/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VehiclePriceService } from './vehicle-price.service';

@Component({
  selector: 'app-vehicle-price',
  templateUrl: './vehicle-price.component.html',
  styleUrls: ['./vehicle-price.component.scss']
})
export class VehiclePriceComponent implements OnInit {
  public  dataThuongHieu : Array<any> = [
    {
      "id": "2",
      "name": "Hyundai"
    },
    {
      "id": "1",
      "name": "Toyota"
    },
    {
      "id": "5",
      "name": "Kia"
    },
    {
      "id": "4",
      "name": "Ford"
    },
    {
      "id": "6",
      "name": "Mazda"
    },
    {
      "id": "8",
      "name": "Mitsubishi"
    },
    {
      "id": "3",
      "name": "Honda"
    },
    {
      "id": "17",
      "name": "Suzuki"
    },
    {
      "id": "36",
      "name": "Vinfast"
    },
    {
      "id": "39",
      "name": "Isuzu"
    },
    {
      "id": "15",
      "name": "Nissan"
    },
    {
      "id": "16",
      "name": "Peugeot"
    },
    {
      "id": "18",
      "name": "Volkswagen"
    },
    {
      "id": "37",
      "name": "MG"
    },
    {
      "id": "9",
      "name": "Mercedes Benz"
    },
    {
      "id": "10",
      "name": "BMW"
    },
    {
      "id": "12",
      "name": "Audi"
    },
    {
      "id": "14",
      "name": "MINI Cooper"
    },
    {
      "id": "31",
      "name": "Subaru"
    },
    {
      "id": "40",
      "name": "UD Trucks"
    },
    {
      "id": "41",
      "name": "Daewoo"
    },
    {
      "id": "42",
      "name": "Hino"
    },
    {
      "id": "43",
      "name": "Thaco"
    },
    {
      "id": "47",
      "name": "Chenglong"
    },
    {
      "id": "48",
      "name": "Gaz"
    },
    {
      "id": "58",
      "name": "Skoda"
    },
    {
      "id": "60",
      "name": "Teraco"
    },
    {
      "id": "66",
      "name": "JAC"
    }
];

public dataProvince=[
  { "id": 23, "name": "Hồ Chí Minh" },
  { "id": 22, "name": "Hà Nội" },
  { "id": 58, "name": "Đà Nẵng" },
  { "id": 8, "name": "Bình Dương" },
  { "id": 62, "name": "Đồng Nai" },
  { "id": 13, "name": "Cần Thơ" },
  { "id": 20, "name": "Hải Phòng" },
  { "id": 35, "name": "Nghệ An" },
  { "id": 49, "name": "Thái Nguyên" },
  { "id": 43, "name": "Quảng Ninh" },
  { "id": 56, "name": "Vĩnh Phúc" },
  { "id": 2, "name": "Bà Rịa Vũng Tàu" },
  { "id": 26, "name": "Khánh Hòa" },
  { "id": 1, "name": "An Giang" },
  { "id": 3, "name": "Bắc Giang" },
  { "id": 4, "name": "Bắc Kạn" },
  { "id": 5, "name": "Bạc Liêu" },
  { "id": 6, "name": "Bắc Ninh" },
  { "id": 7, "name": "Bến Tre" },
  { "id": 9, "name": "Bình Phước" },
  { "id": 10, "name": "Bình Thuận" },
  { "id": 11, "name": "Bình Định" },
  { "id": 12, "name": "Cà Mau" },
  { "id": 14, "name": "Cao Bằng" },
  { "id": 15, "name": "Gia Lai" },
  { "id": 16, "name": "Hà Giang" },
  { "id": 17, "name": "Hà Nam" },
  { "id": 18, "name": "Hà Tĩnh" },
  { "id": 19, "name": "Hải Dương" },
  { "id": 21, "name": "Hậu Giang" },
  { "id": 24, "name": "Hòa Bình" },
  { "id": 25, "name": "Hưng Yên" },
  { "id": 27, "name": "Kiên Giang" },
  { "id": 28, "name": "Kon Tum" },
  { "id": 29, "name": "Lai Châu" },
  { "id": 30, "name": "Lâm Đồng" },
  { "id": 31, "name": "Lạng Sơn" },
  { "id": 32, "name": "Lào Cai" },
  { "id": 33, "name": "Long An" },
  { "id": 34, "name": "Nam Định" },
  { "id": 36, "name": "Ninh Bình" },
  { "id": 37, "name": "Ninh Thuận" },
  { "id": 38, "name": "Phú Thọ" },
  { "id": 39, "name": "Phú Yên" },
  { "id": 40, "name": "Quảng Bình" },
  { "id": 41, "name": "Quảng Nam" },
  { "id": 42, "name": "Quảng Ngãi" },
  { "id": 44, "name": "Quảng Trị" },
  { "id": 45, "name": "Sóc Trăng" },
  { "id": 46, "name": "Sơn La" },
  { "id": 47, "name": "Tây Ninh" },
  { "id": 48, "name": "Thái Bình" },
  { "id": 50, "name": "Thanh Hóa" },
  { "id": 51, "name": "Thừa Thiên Huế" },
  { "id": 52, "name": "Tiền Giang" },
  { "id": 53, "name": "Trà Vinh" },
  { "id": 54, "name": "Tuyên Quang" },
  { "id": 55, "name": "Vĩnh Long" },
  { "id": 57, "name": "Yên Bái" },
  { "id": 59, "name": "Đắk Lắk" },
  { "id": 60, "name": "Đắk Nông" },
  { "id": 61, "name": "Điện Biên" },
  { "id": 63, "name": "Đồng Tháp" }
]

// @ts-ignore
public myForm: FormGroup;

public dataDongXe: any[] = [];
public imgDongXe: string ='';
public carName: string ='';
public dataPhienBan: any[] = [];
public constructor( 
private vehiclePrice : VehiclePriceService,
private formBuilder: FormBuilder
){}
 ngOnInit() {
  this.getInitForm();
}

public getInitForm(){
  this.myForm = this.formBuilder.group({
    trademark: [''] ,
    vehicles: [''],
    option:[''],
    province:['']

  });
}
public getCar(){
  const id = this.myForm.get('trademark').value;
  this.vehiclePrice.getCar(id).subscribe((res :any)  =>{
    if(res.status ==='200'){

    }

  },(err) => {
this.parseOptionData(err.error.text);
  });
}

public getOption(){
  const id = this.myForm.get('vehicles').value;
  this.imgDongXe = this.dataDongXe.find(x => x.id === Number(id)).image;
  this.carName = this.dataDongXe.find(x => x.id === Number(id)).name;
  this.vehiclePrice.getOption(id).subscribe((res :any)  =>{
    if(res.status ==='200'){
    }

  },(err) => {
   this.parseOptionDataVehi(err.error.text);
  });
}
public values : any[] = [];
public total : string;
public getCalculator(){
 const idCar = this.myForm.get('vehicles').value;
 const idOption = this.myForm.get('option').value;
 const idProvince = this.myForm.get('province').value;
 if(idOption ==='' ||  idProvince ===''){
  return;
 }

 this.vehiclePrice.getCalculator(idCar,idOption,idProvince).subscribe((res :any)  =>{
  if(res.status ==='200'){
  }

},(err) => {
//  this.parseOptionDataVehi(err.error.text);
const tempElement = document.createElement('div');
tempElement.innerHTML = err.error.text;

// Lấy giá trị từ thẻ <b> trong danh sách
const bElements = tempElement.querySelectorAll('.frm-result li b');
this.values = Array.from(bElements).map((element) => element.textContent);

// Lấy giá trị TỔNG CỘNG
const totalElement = tempElement.querySelector('.frm-total b');
this.total = totalElement?.textContent || '';
});

}

public parseOptionData(response :any) {

  const parser = new DOMParser();
  const doc = parser.parseFromString(response, 'text/html');
  const options = doc.querySelectorAll('option');

  this.dataDongXe = Array.from(options).map(option => ({
    id: parseInt(option.getAttribute('value')),
    image: option.getAttribute('data-image'),
    name: option.textContent.trim()
  }));

}

public parseOptionDataVehi(response :any) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(response, 'text/html');
  const options = doc.querySelectorAll('option');

  this.dataPhienBan = Array.from(options).map(option => ({
    id: parseInt(option.getAttribute('value')),
    name: option.textContent.trim()
  }));

}

}
