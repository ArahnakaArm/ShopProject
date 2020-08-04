import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service'
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  shop = {
    name : String,
    ownername : String,
    email : String,
    address : String
  }
  shopId : any

  constructor(private activateRouter:ActivatedRoute,private shopService : ShopService,private router: Router) { }

  ngOnInit(): void {
     this.activateRouter.queryParams.subscribe(params =>{
      this.shopId = params.id
      this.shopService.findOne(params.id).subscribe(response =>{
          this.shop = response
          console.log(response)
      })
      
    })
  }
  
  deleteShop(){
    console.log(this.shopId)
      this.shopService.deleteOne(this.shopId).subscribe(params =>{
        alert('Delete Success')
        this.router.navigate(['shoplist']);
      })
  }

}
