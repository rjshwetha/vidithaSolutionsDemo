import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  userName: string | undefined;
  password: string | undefined;
 
  constructor(private router:Router){

  }

  ngOnInit() {
    
 }

  onClickSubmit(){
    (this.userName ==="admin" && this.password === "admin")?this.router.navigateByUrl('createUser'):console.log("not admin");
  }
}
