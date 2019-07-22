import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  userName : string = "";
  password : string = "";

  constructor(private frmbuilder:FormBuilder) {
    this.loginForm = frmbuilder.group({
      uname : new FormControl(),
      password : new FormControl()
    });
   }

  ngOnInit() {
  }

  PostData(loginForm: NgForm){  
    console.log(loginForm.controls);
  }
}
