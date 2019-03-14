import { Component, OnInit } from '@angular/core';
import{ApiService}from'../../services/api/api.service';
import{map}from'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private api:ApiService,private router : Router) { }
  prd;
  ngOnInit() {
    this. getProducts()
  }
  getProducts(){
  
    this.api.getAllProducts().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
      this.prd = res;
      console.log(res);
    })
}
onClick(item){  
    
  this.router.navigateByUrl('dashboard/EnterProduct/'+item.id);
  
  }
}
