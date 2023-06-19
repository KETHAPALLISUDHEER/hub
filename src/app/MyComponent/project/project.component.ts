import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  projectForm!: FormGroup;
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
   this.projectForm= this.fb.group({
    projectname:['',Validators.required],
    projectimage:['',Validators.required],
    projectdesc:['',Validators.required]
   })
  }
  onUpload(){
    if(this.projectForm.valid){
      console.log(this.projectForm.value);
      alert("Project Uploaded Succesfully")
    }
    else{
      console.log("invalid Form ");
      this.validateAllForm(this.projectForm);
      alert("Invalid Project")
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
