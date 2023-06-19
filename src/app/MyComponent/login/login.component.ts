import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
 constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      alert("Succesfully submitted")
    }
    else{
      console.log("invalid Form ");
      this.validateAllForm(this.loginForm);
      alert("Your form is invalid")
    }
  }
  private validateAllForm(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({ onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllForm(control)
      }
    })
  }
 OnInit(){}
 
}
