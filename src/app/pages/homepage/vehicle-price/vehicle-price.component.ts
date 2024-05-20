import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-price',
  templateUrl: './vehicle-price.component.html',
  styleUrls: ['./vehicle-price.component.scss']
})
export class VehiclePriceComponent implements OnInit {
  public trademark: Array<any> = [];
  public vehicles: Array<any> = [];
  public versions: Array<any> = [];
  public cityRegister: Array<any> = [];
  constructor() { }

  ngOnInit() {
    //create 3 array temp chứa 3 list thương hiệu;
  }

  public selectTrademark(event: any) {
    if(event.target.value){
      this.vehicles = this.vehicles.filter((res) => res.id === event.target.id)
    }else{
      this.vehicles = [];
    }
  }

  public selectVehicles(event: any) {
    if(event.target.value){
      this.versions = this.versions.filter((res) => res.id === event.target.id)
    }else{
      this.versions = [];
    }
  }

  public selectCityRegister(event:any){
    // nếu đủ dữ liệu của 4 trường thì search thông tin 
  }

  public selectVersions(event:any){
    // nếu đủ dữ liệu của 4 trường thì search thông tin 
  }

  
}
