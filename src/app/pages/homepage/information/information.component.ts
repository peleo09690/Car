import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public listInformation: Array<any> = 
  [
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    },
    {
      image:"https://hatinhxe.com/images/cars/thumbs/mg-zs-114-0.jpg" ,
      title_infor: "VinFast vừa ra dòng xe mới VF 9",
      content_infor: " VinFast VF 9 - tên gọi mới của dòng xe ô tô điện VinFast VF e35 được giới thiệu lần đầu tiên tại Los Angeles Auto Show 2021 và được công bố mở bán chính thức trên toàn cầu vào ngày 6/1/2022 trong khuôn khổ Triển lãm Điện tử Tiêu dùng CES 2022 (Las Vegas, Mỹ). Đây là mẫu SUV điện hạng D cỡ trung do VinFast sản xuất, đánh dấu bước tiến mới trong chiến lược trở thành hãng xe ô tô thuần điện từ cuối năm 2024.",
      featured_news: "Tin tức nổi bật",
      create_date: "2024/01/01"
    }
  ];
  public listShared: Array<any> = [
    {title:'Mua xe cũ Hyundai Creta giá dễ chịu nhưng có 3 "bệnh vặt" gây khó chịu'},
    {title:'Mua xe cũ Hyundai Creta giá dễ chịu nhưng có 3 "bệnh vặt" gây khó chịu'},
    {title:'Mua xe cũ Hyundai Creta giá dễ chịu nhưng có 3 "bệnh vặt" gây khó chịu'},
    {title:'Mua xe cũ Hyundai Creta giá dễ chịu nhưng có 3 "bệnh vặt" gây khó chịu'},
    {title:'Mua xe cũ Hyundai Creta giá dễ chịu nhưng có 3 "bệnh vặt" gây khó chịu'}
  ]
  public listAnswerQuestion: Array<any> = [
    {title:'Soi trang bị xe điện giá rẻ VinFast VF 3 và Wuling Mini EV, xe nào an toàn hơn?'},
    {title:'Soi trang bị xe điện giá rẻ VinFast VF 3 và Wuling Mini EV, xe nào an toàn hơn?'},
    {title:'Soi trang bị xe điện giá rẻ VinFast VF 3 và Wuling Mini EV, xe nào an toàn hơn?'},
    {title:'Soi trang bị xe điện giá rẻ VinFast VF 3 và Wuling Mini EV, xe nào an toàn hơn?'},
    {title:'Soi trang bị xe điện giá rẻ VinFast VF 3 và Wuling Mini EV, xe nào an toàn hơn?'}
  ];
  public listReview: Array<any> = [
    {title:'Toyota Wigo lần đầu vượt "ông vua" xe đô thị Hyundai Grand i10'},
    {title:'Toyota Wigo lần đầu vượt "ông vua" xe đô thị Hyundai Grand i10'},
    {title:'Toyota Wigo lần đầu vượt "ông vua" xe đô thị Hyundai Grand i10'},
    {title:'Toyota Wigo lần đầu vượt "ông vua" xe đô thị Hyundai Grand i10'},
    {title:'Toyota Wigo lần đầu vượt "ông vua" xe đô thị Hyundai Grand i10'},
    {title:'Toyota Wigo lần đầu vượt "ông vua" xe đô thị Hyundai Grand i10'}
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public linkReview(){
    this.router.navigate(['review'])
  }

  public linkSharedAdvise(){
    this.router.navigate(['shared-advise'])
  }
  public linkAnswerQuestion(){
    this.router.navigate(['answer-question'])
  }
}
