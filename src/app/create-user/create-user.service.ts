import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { webService } from '../web.service';

const url = "http://localhost:8080/createUser";

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private webService:webService) { 

  }
createUser(userName:string,email:string,phonenumber:number){
return this.webService.post({
  "userName":userName,
  "email":email,
  "phonenumber":phonenumber
})
 }

 getUserDetails(){
  

 }
 listUser(){
  console.log("user deatils");
  return this.webService.get();
 }
 deleteUser(){

 }
}
