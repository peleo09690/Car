/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-installment-price',
  templateUrl: './installment-price.component.html',
  styleUrls: ['./installment-price.component.scss']
})
export class InstallmentPriceComponent implements OnInit {

  // @ts-ignore
public myForm: FormGroup;
public arrayPrice :any []=[];
public objectPrice:any ={};
public totallai :number || null;
public totalgoc:number;
 public constructor( 
  private formBuilder: FormBuilder
 ){}
   ngOnInit() {
    this.getInitForm();
    this.installment();
  }
  public getInitForm(){
    this.myForm = this.formBuilder.group({
      sotienvay: ['500000'] ,
      thoihanvay: ['5'],
      laisuat1:['1'],
      laisuat2:['2']
    });
  }

//   function installment() {
//     $("#show-installment").html("");
//     $(".installment-content").fadeIn();
//     var price = parseInt($('#price').val().replace(/\D/g, ''));
//     var timeout = parseInt($('#timeout').val()) * 12;
//     var interestrate_first = parseFloat($('#interestrate-first').val());
//     var interestrate_second = parseFloat($('#interestrate-second').val());
//     var tien_goc = price / timeout;
//     var tong_lai = 0;
//     var tong_goc = 0;
//     for (var i = 1; i <= timeout; i++) {
//         var debt = price - ((i - 1) * tien_goc);
//         if (i <= 12) {
//             var lai_thang = ((interestrate_first / 12) / 100) * debt;
//             tong_lai += lai_thang;
//             tong_goc += tien_goc;
//             //console.log(Math.ceil(tong));
//             var goc_lai = tien_goc + lai_thang;
//             $('#show-installment').append('<tr><td>Tháng thứ ' + i + '</td><td>' + (Math.ceil(debt)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(tien_goc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(lai_thang).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(goc_lai).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td></tr>');
//         } else {
//             var lai_thang = ((interestrate_second / 12) / 100) * debt;
//             tong_lai += lai_thang;
//             tong_goc += tien_goc;
//             //console.log(Math.ceil(lai_thang));
//             var goc_lai = tien_goc + lai_thang;
//             $('#show-installment').append('<tr><td>Tháng thứ ' + i + '</td><td>' + (Math.ceil(debt)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(tien_goc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(lai_thang).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(goc_lai).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td></tr>');
//         }
//     }
//     var totallai = Math.ceil(tong_lai);
//     var totalgoc = totallai + Math.ceil(tong_goc);
//     $('#total_lai').html(totallai.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫');
//     $('#total_goc').html(totalgoc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫');
// }

public installment() {
  this.arrayPrice=[];
  let price = this.myForm.get('sotienvay').value
  let timeout = (this.myForm.get('thoihanvay').value) * 12;
  let interestrate_first = this.myForm.get('laisuat1').value;
  let interestrate_second = this.myForm.get('laisuat2').value;
  let tien_goc = price / timeout;
  let tong_lai = 0;
  let tong_goc = 0;
  for (let i = 1; i <= timeout; i++) {
    this.objectPrice={};
      let debt = price - ((i - 1) * tien_goc);
      if (i <= 12) {
          let lai_thang = ((interestrate_first / 12) / 100) * debt;
          tong_lai += lai_thang;
          tong_goc += tien_goc;
          //console.log(Math.ceil(tong));
          let goc_lai = tien_goc + lai_thang;

          this.objectPrice.thang = 'Tháng thứ ' +i;
          this.objectPrice.duno = (Math.ceil(debt)).toString();
          this.objectPrice.tiengoc = Math.ceil(tien_goc).toString();
          this.objectPrice.tienlai = Math.ceil(lai_thang).toString();
          this.objectPrice.goclai = Math.ceil(goc_lai).toString();
          this.arrayPrice.push(this.objectPrice);
          // $('#show-installment').append('<tr><td>Tháng thứ ' + i + '</td><td>' + (Math.ceil(debt)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(tien_goc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(lai_thang).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(goc_lai).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td></tr>');
      } else {
          let lai_thang = ((interestrate_second / 12) / 100) * debt;
          tong_lai += lai_thang;
          tong_goc += tien_goc;
          //console.log(Math.ceil(lai_thang));
          let goc_lai = tien_goc + lai_thang;
          this.objectPrice.thang ='Tháng thứ ' +i;
          this.objectPrice.duno = (Math.ceil(debt)).toString();
          this.objectPrice.tiengoc = Math.ceil(tien_goc).toString();
          this.objectPrice.tienlai = Math.ceil(lai_thang).toString();
          this.objectPrice.goclai = Math.ceil(goc_lai).toString();
          this.arrayPrice.push(this.objectPrice);
          // $('#show-installment').append('<tr><td>Tháng thứ ' + i + '</td><td>' + (Math.ceil(debt)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(tien_goc).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(lai_thang).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td><td>' + Math.ceil(goc_lai).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</td></tr>');
      }
  }
  this.totallai = Math.ceil(tong_lai);
  this.totalgoc = this.totallai + Math.ceil(tong_goc);
  // $('#total_lai').html(totallai.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫');
  // $('#total_goc').html(totalgoc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ₫');
}
 
}
