import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signUpForm!:FormGroup;
  constructor(private fb: FormBuilder){
    
  }
  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      name:['',Validators.required],
      contact:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confpassword:['',Validators.required]
    })
  }
  check:boolean=false;
  onSingUp(){
    if(this.signUpForm.value.password==this.signUpForm.value.confpassword){
      if(this.signUpForm.valid){
        console.log(this.signUpForm.value);
        alert("Thank You For Registration!!")
        this.check=false;
        this.signUpForm.reset();
      }
      else{
        console.log("invalid Form ");
        this.validateAllForm(this.signUpForm);
        alert("Your form is invalid")
      }
    }
    else{
      this.check=true;
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
  // constructor(private route: Router){}
  // loginhere(){
  //   this.route.navigate(['./login'])
  // }
}
