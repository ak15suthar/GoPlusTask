import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  registerForm: FormGroup = new FormGroup({})

  constructor(private service: ServiceService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      first_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      avatar: new FormControl('', Validators.required)
    })
  }

  submit() {
    // console.log("f ", this.registerForm.value);

    this.service.add(this.registerForm.value).subscribe(res => {
      console.log("done");
      this.rout.navigateByUrl('');

    })

  }
}
