import { Component, Input } from '@angular/core';
import { CreateUserService } from './create-user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @Input() userTask!: any[];
  userName!: string;
  phonenumber!: number;
  email!: string;
  createUser =false;
  deleteUser= false;
  getAllUser = false;
  updateUser = false;
  userDetails : any ;
  // country='';
  show=true;
  ngOnInit() {
    console.log(this.userTask);
  }
  constructor(private createUserService:CreateUserService, private router:Router){

  }

  getSelectedValue(event: any){
    console.log(event)
    switch(event){
      case 'createUser': 
                        this.createUser=true;
                        this.updateUser=false;
                        this.getAllUser=false;
                        this.deleteUser=false;
      break;
      case 'updateUser':
                      this.createUser=false;
                      this.updateUser=true;
                      this.getAllUser=false;
                      this.deleteUser=false;
       break;
      case 'deleteUser': this.createUser=false;
                          this.updateUser=false;
                          this.getAllUser=false;
                          this.deleteUser=true;
      break;
      case 'getAllUser': 
                      this.createUser=false;
                      this.updateUser=false;
                      this.getAllUser=true;
                      this.deleteUser=false;
                      this.onClickGetAllUsers();
                      break;
    }
    
  }

  onClickSave(){
    this.createUserService.createUser(this.userName,this.email,this.phonenumber).subscribe(res =>console.log(res));
  }
  onClickBack(){
    this.router.navigateByUrl('dashboard');
  }
  onClickGetAllUsers(){
    console.log("got the details")
    this.getAllUser = true;
    this.createUserService.listUser().subscribe(res=>{
      console.log(res);
      this.userDetails=res;
      console.log(this.userDetails)
    });
    
  }

}
