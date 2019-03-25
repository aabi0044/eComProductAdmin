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
   value1;
   
   clothing;
   clothing2
   clothing3
   subcatagory22
   subcatagory33
   catagory11;
   subcatagory11;
 type:any=[];
    
  size={
    color:'',
    quantity:null,
    value:''
  }
  catagory:any=[];
    

  passid;
  prd;
  constructor(private toast:ToasterService,private api:ApiService,
    private activatedRoute: ActivatedRoute,
    private router:Router) {  
       this.type=[
      {name:"Women"},
      {name:"Men"},
      {name:"Kids"}  
      ];
      // this.catagory=[
      //   // {name:"Choose Catagory"},
      //   {name:"Clothing"},
      //   {name:"Ethnic wear"}  ,
      //   {name:"Foot wear"}
      //   ];
    
    }
    
  @ViewChild('t') typeH:ElementRef;
  @ViewChild('catm') typem:ElementRef;
  // @ViewChild('catw') typew:ElementRef;
  // @ViewChild('catk') typek:ElementRef;
  @ViewChild('catm1') typem1:ElementRef;
  // @ViewChild('catm2') typem2:ElementRef;
  // @ViewChild('catm3') typem3:ElementRef;
  
  ngOnInit() {
    
     
    this.passid = this.activatedRoute.snapshot.paramMap.get ('id')
    console.log(this.size)

   
    this.typem.nativeElement.hidden=true;
    this.typem1.nativeElement.hidden=true;
    if(this.passid!=null){
      this.display();
      
      // this.subcatagory11='other';
      }
      else{
        this.value1='Men'
      }
      console.log(this.catagory11)
      console.log(this.subcatagory11)
    // this.typem2.nativeElement.hidden=true;
    // this.typem3.nativeElement.hidden=true;
    // this.typek.nativeElement.hidden=true;
    // this.typew.nativeElement.hidden=true;
    // this.catagory1();
  }
  
  checkdata(){
    if(this.name!=''&&this.prdPrice!=''&&this.status!=''&&this.size.color!=''
    &&this.size.quantity!=null&&this.size.value!=''
    &&this.desc!=''&&this.subcatagory11!=null&&this.catagory11!=null&&this.type!=''&&
    this.subcatagory11!="Choose Catagory" &&this.catagory11!="Choose Catagory")
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
      type:this.value1,
      
      catagory:this.catagory11,
      SubCatagory:this.subcatagory11
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
    this.type.name==[];
    this.value1='';
    this.catagory.name=="";
    this.catagory11="";
    this.subcatagory11=null 
    this.size={
      color:'',
      quantity:null,
      value:''
    }
    this.value1='Men'
    this.typem.nativeElement.hidden=true;
    this.typem1.nativeElement.hidden=true;
    // this.typek.nativeElement.hidden=true;
    // this.typew.nativeElement.hidden=true;
    
    this.router.navigateByUrl('/dashboard/EnterProduct')
    
  }
  display(){
   
    
      // this.typem.nativeElement.hidden=false;
      // this.typem1.nativeElement.hidden=false;
        this.api.getSingleProduct(this.passid).subscribe(res=>{
        this.prd=res;
        this.name=this.prd.name;
        this.prdPrice=this.prd.price;
        this.desc=this.prd.description;
        this.status=this.prd.status;
        this.value1=this.prd.type;
       this.size=this.prd.size;
   
        // this.type=this.prd.type;
        this.catagory11=this.prd.catagory;
        this.subcatagory11=this.prd.SubCatagory;
        console.log(this.catagory11)
        console.log(this.subcatagory11)
      
        // this.catagory1();
        // this.subcat();
      })
      
 
  }
  checkforupdate(){
    if(this.name!=''&&this.prdPrice!=''&&this.status!=''&&this.size.color!=''
    &&this.size.quantity!=null&&this.size.value!=''
    &&this.desc!=''&&this.subcatagory11!=null&&this.catagory11!=null&&this.catagory11!="Choose Catagory"&&
    this.subcatagory11!="Choose Catagory" )
    {
      
      this.updateProduct();
      this.toast.showSuccess();
       
    }
    else
    {
      this.toast.warning();
    }
  }
  updateProduct(){

    let data={
      name:this.name,
      price:this.prdPrice,
      description:this.desc,
      status:this.status,
      size:this.size,
      type:this.value1,
      catagory:this.catagory11,
      SubCatagory:this.subcatagory11
    }
    let id=this.passid;
    this.api.updateProduct(id,data).then(res=>{
      console.log("updated");
      this.resetForm();
    })
  
  }
  catagory1(){
 
      
    if(this.typeH.nativeElement.value=='Women'){
      this.catagory11=null
      this.subcatagory11=null
      // this.subcatagory22=null
      // this.subcatagory33=null
      
      this.typem.nativeElement.hidden=false;
     
      this.catagory=[
        {name:"Choose Catagory"},
        {name:"Clothing"},
        {name:"Ethnic wear"}  ,
        {name:"Foot wear"}
        ];
        
       
      // this.typek.nativeElement.hidden=true;
      // this.typew.nativeElement.disabled=false;
      // this.typew.nativeElement.hidden=false;
      
     
      
    }
    else if(this.typeH.nativeElement.value=='Men'){
     
      // this.typem.nativeElement.disabled=false;
      this.typem.nativeElement.hidden=false;
      // this.typek.nativeElement.hidden=true;
      // this.typew.nativeElement.hidden=true;
      this.catagory11=null
      this.subcatagory11=null
      // this.subcatagory22=null
      // this.subcatagory33=null
      this.catagory=[
        {name:"Choose Catagory"},
        {name:"Clothing"},
        {name:"Ethnic wear"}  ,
        {name:"Foot wear"}
        ];
    
     
      }
      else if(this.typeH.nativeElement.value=='Kids'){
        
        this.typem.nativeElement.hidden=false;
        // this.typek.nativeElement.disabled=false;
        // this.typek.nativeElement.hidden=false;
        // this.typew.nativeElement.hidden=true;
        this.catagory11=null
        this.subcatagory11=null
        // this.subcatagory22=null
        // this.subcatagory33=null
        this.catagory=[
          {name:"Choose Catagory"},
          {name:"Night Suit"},
          {name:"School Uniform"},
          {name:"Cloth"},
          {name:"Foot wear"},
          ];
        
       
         
        }
      else{

      }
  }
  subcat(){
    
    if(this.typeH.nativeElement.value=='Men'&&this.typem.nativeElement.value=='Clothing'){
      // this.typem2.nativeElement.hidden=true
      this.typem1.nativeElement.hidden=false
      // this.typem3.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Shalwar Qameez"},
        {name:"Shirts"},
        {name:"Jeans"},
        {name:"T-Shirts and Polo Shirts"} ,
        {name:"Pant and Trouser"}   
        ];

    }
    else if(this.typeH.nativeElement.value=='Men'&&this.typem.nativeElement.value=='Ethnic wear'){
      // this.typem2.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem3.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Kurta and Shalwar"},
        {name:"Waistcoats"},
        {name:"Unstiched Fabric"},
        {name:"Pakol"}    
        ];
    }
    else if(this.typeH.nativeElement.value=='Men'&&this.typem.nativeElement.value=='Foot wear'){
      // this.typem3.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem2.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Sandals"},
        {name:"Sports Shoes"},
        {name:"Flats"},
        {name:"Boots"} ,
        {name:"Casual Shoes"}  ,
        {name:"Formal Shoes"},
        {name:"Peshawari Chapal"}       
        ];
    }
    //////////
    else if(this.typeH.nativeElement.value=='Women'&&this.typem.nativeElement.value=='Clothing'){
      // this.typem2.nativeElement.hidden=true
      this.typem1.nativeElement.hidden=false
      // this.typem3.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Bottoms and Tights"},
        {name:"T-shirts and Tanktops"},
        {name:"Jeans"},
        {name:"Winter Wear"}    
        ];

    }
    else if(this.typeH.nativeElement.value=='Women'&&this.typem.nativeElement.value=='Ethnic wear'){
      // this.typem2.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem3.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Shalwar Qameez"},
        {name:"Dupata"},
        {name:"Jeans"},
        {name:"Shirts"}    
        ];
    }
    else if(this.typeH.nativeElement.value=='Women'&&this.typem.nativeElement.value=='Foot wear'){
      // this.typem3.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem2.nativeElement.hidden=true
      this.clothing=null
    
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Sandals"},
        {name:"Sports Shoes"},
        {name:"Flats"},
        {name:"Boots"}    
        ];
    }
    
    //////////
    else if(this.typeH.nativeElement.value=='Kids'&&this.typem.nativeElement.value=='Night Suit'){
      // this.typem2.nativeElement.hidden=true
      this.typem1.nativeElement.hidden=false
      // this.typem3.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"Barbie Night Suit"},
        {name:"Ben 10 Night Suit"},
        {name:"Dragon Ball Night Suit"},
        {name:"Naruto Night Suit"}    
        ];

    }
    else if(this.typeH.nativeElement.value=='Kids'&&this.typem.nativeElement.value=='School Uniform'){
      // this.typem2.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem3.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"APS Uniform"},
        {name:"Fauji Foundation Uniform"},
        {name:"SLS Uniform"},
        ];
    }
    else if(this.typeH.nativeElement.value=='Kids'&&this.typem.nativeElement.value=='Foot wear'){
      // this.typem3.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem2.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"School Shoes"},
        {name:"Sports Shoes"},
        {name:"Sneakers"},
        ];
    }
    else if(this.typeH.nativeElement.value=='Kids'&&this.typem.nativeElement.value=='Cloths'){
      // this.typem3.nativeElement.hidden=false
      this.typem1.nativeElement.hidden=false
      // this.typem2.nativeElement.hidden=true
      this.clothing=null
      this.clothing=[
        {name:"Choose Catagory"},
        {name:"School Shoes"},
        {name:"Sports Shoes"},
        {name:"Sneakers"},
        ];
    }
    else{  console.log("Not Working")}

    
  
    
  }
  }
  

