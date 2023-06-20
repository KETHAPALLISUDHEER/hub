import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-ideas',
  templateUrl: './post-ideas.component.html',
  styleUrls: ['./post-ideas.component.css']
})
export class PostIdeasComponent implements OnInit{
  postForm!: FormGroup;
  constructor(private fb:FormBuilder) {}
  
    ngOnInit(): void {
      this.postForm = this.fb.group({
        ideaname:['', Validators.required],
        ideadesc:['',Validators.required],
        ideacontact:['',Validators.required]
      })
    }
  
  
  onPost(){
    if(this.postForm.valid){
      console.log(this.postForm.value);
      alert("Thanks for Sharing Your Ideas !!")
    }
    else{
      console.log("invalid Form ");
      this.validateAllForm(this.postForm);
      alert("Please! Give the Proper Details")
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
}
