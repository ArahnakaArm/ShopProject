import { Component, OnInit,ViewChild  } from '@angular/core';
import { ShopService } from '../shop.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';  
import { Router } from '@angular/router'
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {
  shops: any = [];
  loading = false;
  @ViewChild('shopData') myForm;
  headElements = ['Name', 'OwnerName', 'Email', 'Address'];

  constructor(private shopService : ShopService, private router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('Token'))
  
    this.fetchShops()

  }
  fetchShops(){
    this.shopService.findAll().subscribe(response =>{
      this.shops = response;
      console.log(this.shops[0].name);
    });
  }
  addShop(data){
    if(data.name == '' || data.ownername == '' || data.email == '' || data.address == ''){
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }else{
      this.loading = true;
      this.shopService.addShop(data).subscribe(response =>{
        this.fetchShops()
        this.myForm.resetForm();
        this.loading = false;
      });
    }
  
  }
  goDetail(data){
    console.log(data)
  }
  logout(){
    localStorage.removeItem('Token')
    this.router.navigateByUrl("/login");
  }

}
