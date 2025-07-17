import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public isShow:boolean = false;

  handleIsShow(){
    this.isShow = !this.isShow
  }

  // Welcome

  public userName:string= "";
  public nameSubmitted:boolean = false;

  submitName(){
    if(this.userName.trim()){
      this.nameSubmitted = true
    }
  }

}
