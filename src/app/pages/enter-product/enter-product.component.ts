import { Component, OnInit,ViewChild,ElementRef, KeyValueDiffers } from '@angular/core';
import{ApiService}from'../../services/api/api.service'
import{ToasterService}from'../../services/toaster.service';
import { ActivatedRoute, Router } from '@angular/router'
import{map}from'rxjs/operators';
@Component({
  selector: 'app-enter-product',
  templateUrl: './enter-product.component.html',
  styleUrls: ['./enter-product.component.css']
})

export class EnterProductComponent implements OnInit {
  name:'';
  prdPrice:'';
  desc:'';
  status:'';
  img;

  type:'';
  size={
    color:'',
    quantity:null,
    value:''
  }
  catagory;
  count=0;
  passid;
  prd;
  constructor(private toast:ToasterService,private api:ApiService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }
 
  @ViewChild('t') typeH:ElementRef;
  @ViewChild('catm') typem:ElementRef;
  @ViewChild('catw') typew:ElementRef;
  @ViewChild('catk') typek:ElementRef;
  
  ngOnInit() {
    this.passid = this.activatedRoute.snapshot.paramMap.get ('id')
    console.log(this.size)
  if(this.passid!=null){
    this.display();
    
    }
    else{
     
    }
    this.typem.nativeElement.hidden=true;
    this.typek.nativeElement.hidden=true;
    this.typew.nativeElement.hidden=true;
  }
  checkdata(){
    if(this.name!=''&&this.prdPrice!=''&&this.status!=''&&this.size.color!=''
    &&this.size.quantity!=null&&this.size.value!=''
    &&this.desc!=''&&this.type!=''&&this.catagory!='' )
    {
      
      this.createproduct();
      this.toast.showSuccess();
       
    }
    else
    {
      this.toast.warning();
    }
  }
  createproduct(){
    let data={
      name:this.name,
      price:this.prdPrice,
      description:this.desc,
      status:this.status,
      size:this.size,
      type:this.type,
      catagory:this.catagory
    }
    this.api.createProduct(data).then(res=>{
      console.log("product created");
      this.resetForm();
    })
  }
  deleteProduct(){
    let id=this.passid;
    this.api.deleteProduct(id).then(res=>{
      console.log("deleted");
      this.resetForm();
    })
  }
  resetForm(){
    this.name='';
    this.prdPrice='';
    this.desc='';
    this.status='';
    this.catagory='';
    this.size={
      color:'',
      quantity:null,
      value:''
    }

    this.type='';
    this.router.navigateByUrl('/dashboard/EnterProduct')
    
  }
  display(){
   
    
    
        this.api.getSingleProduct(this.passid).subscribe(res=>{
        this.prd=res;
        this.name=this.prd.name;
        this.prdPrice=this.prd.price;
        this.desc=this.prd.description;
        this.status=this.prd.status;
        
       this.size=this.prd.size;
        this.type=this.prd.type;
        this.catagory=this.prd.catagory;
      })
 
  }
  updateProduct(){
    let data={
      name:this.name,
      price:this.prdPrice,
      description:this.desc,
      status:this.status,
      size:this.size,
      type:this.type,
      catagory:this.catagory
    }
    let id=this.passid;
    this.api.updateProduct(id,data).then(res=>{
      console.log("updated");
      this.resetForm();
    })
  }
  catagory1(){
    if(this.typeH.nativeElement.value=='Women'){
      
      this.typem.nativeElement.hidden=true;
      this.typek.nativeElement.hidden=true;
      this.typew.nativeElement.disabled=false;
      this.typew.nativeElement.hidden=false;
    }
    else if(this.typeH.nativeElement.value=='Men'){
     
      this.typem.nativeElement.disabled=false;
      this.typem.nativeElement.hidden=false;
      this.typek.nativeElement.hidden=true;
      this.typew.nativeElement.hidden=true;
      }
      else if(this.typeH.nativeElement.value=='Kid'){
        
        this.typem.nativeElement.hidden=true;
        this.typek.nativeElement.disabled=false;
        this.typek.nativeElement.hidden=false;
        this.typew.nativeElement.hidden=true;
        }
      else{

      }
  }
  }
  

