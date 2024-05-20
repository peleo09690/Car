import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-main',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.scss']
})
export class HomepageMainComponent implements OnInit {
  public showRoom: Array<any> = [
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    },
    {
      image:'https://hatinhxe.com/images/cars/thumbs/623fa17f9e2ec43f5cd7ee2302547cc7.png',
      name:'Showroom Vinfast',
      hotline:'0983672266'
    }
  ];
  public listCarMonth: Array<any> = [
    {
      linkAutomaker: 'test',
      nameMaker: 'namema',
      nameVehicles: 'nameXe',
      version: 'sadadsasdsa',
      vehicleSegment: 'adadadsada',
      listedPrice: 'adhjahdjsa'
    },
    {
      linkAutomaker: 'test',
      nameMaker: 'namema',
      nameVehicles: 'nameXe',
      version: 'sadadsasdsa',
      vehicleSegment: 'adadadsada',
      listedPrice: 'adhjahdjsa'
    },
    {
      linkAutomaker: 'test',
      nameMaker: 'namema',
      nameVehicles: 'nameXe',
      version: 'sadadsasdsa',
      vehicleSegment: 'adadadsada',
      listedPrice: 'adhjahdjsa'
    },
    {
      linkAutomaker: 'test',
      nameMaker: 'namema',
      nameVehicles: 'nameXe',
      version: 'sadadsasdsa',
      vehicleSegment: 'adadadsada',
      listedPrice: 'adhjahdjsa'
    }
  ];
  public listTrademark: Array<any> = [
    { name: 'toyota' },
    { name: 'huyndai' },
  ]
  public posts: Array<any> =
    [
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      },
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      },
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      },
      {
        titlePost: 'xe mới nhất',
        imagePost: 'https://hatinhxe.com/images/cars/thumbs/toyota-hilux-159-1.jpg',
        contentPost: 'xe là xe'
      }

    ]
  constructor() { }

  ngOnInit() {
  }

}
