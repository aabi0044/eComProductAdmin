import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private save:AngularFirestore) { }
  getallproduct(){
    return this.save.collection('user').snapshotChanges();
  }
  getsingleproductU(id){
    return this.save.doc('user/'+id).valueChanges();
  }
  createProduct(data){
    return this.save.collection('products').add(data);
      }
  getSingleProduct(id){
    return this.save.doc('products/'+id).valueChanges();
      }
  getAllProducts(){
        return this.save.collection('products').snapshotChanges();
      }
  updateProduct(id,data){
        return this.save.doc('products/'+id).update(data);
      }
  deleteProduct(id){
        return this.save.doc('products/'+id).delete();
      }
}
