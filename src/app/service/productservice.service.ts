import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor( private http:HttpClient) { }

  // postEmploy(data:any)
  // {
  //   return this.http.post("http://localhost:3000/product/",data)
    
  // }

  postData(res:any){
  return this.http.post('http://localhost:3000/products',res)
   alert(res)
  }
  
  getEmploy()
  {
    return this.http.get("http://localhost:3000/products")
    // .pipe(map((res:any)=>{
    //   return res
    // }))
  }
   updateEmploy(id:any,data:any)
  {
    return this.http.put(`http://localhost:3000/products/${id}`,data)
    // .pipe(map((res:any)=>{
    //   return res
    // }))
  }
  deletEmploy(id:number){
    return this.http.delete(`http://localhost:3000/products/`+id)

  }
  
  
}
