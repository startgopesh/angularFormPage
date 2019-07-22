import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators,EmailValidator} from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})

export class SignUpPageComponent implements OnInit {
  signupForm : FormGroup;
  firstName : string = "";
  lastName : string = "";
  Email : string = "";
  password : string = "";
  Mobile : number = 0  ;

  constructor(private frmbuilder:FormBuilder ) { 
    this.signupForm = frmbuilder.group({
      fname : ['',Validators.required],
      lname : ['',[Validators.required,Validators.maxLength(10)]],
      emailId : ['',[Validators.required,Validators.email]],  
      userpassword : ['', Validators.required],
      mobile : ['',[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]]   
    }); 
  } 

  ngOnInit() {

  }
  PostData()
  {
    this.firstName=this.signupForm.get('fname').value;
   
    console.log(this.firstName);
    console.log(this.signupForm.value);
   
  }
  resetForm(){
      this.signupForm.reset({
      fname:'abc',
      emailId:'xyz@gmail.com '
    });
  }
}
