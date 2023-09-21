import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const url = "http://localhost:8080/createUser";

@Injectable({
  providedIn: 'root'
})
export class webService {

  constructor(private http:HttpClient) { 

  }
 get(){
    return this.http.get(`${url}`)
  }
  post(payload:object){
    console.log("in web service")
    return this.http.post(`${url}`,payload)
  }
  put(uri: string,payload: object){
    return this.http.get(`${url}/${uri}`,payload)
  }
  delete(uri: string){
    return this.http.get(`${url}/${uri}`)
  }
}
