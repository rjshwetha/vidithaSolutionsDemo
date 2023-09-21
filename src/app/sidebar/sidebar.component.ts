import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() userTask="";
  constructor(private router:Router){

  }
  goto(option:string){
    console.log(option)
    this.router.navigateByUrl('createUser');
    
    switch(option){
      case 'createUser':this.userTask=option;
        this.router.navigateByUrl('createUser');
      break;
    }
    
  }

}
