import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  registerForm: FormGroup = new FormGroup({})
  uid = 0
  list: any = {}

  constructor(private service: ServiceService,
    private router: ActivatedRoute,
    private rout: Router
  ) { }

  ngOnInit(): void {

    this.uid = this.router.snapshot.params.id;
    // console.log("u ", this.uid);

    this.service.getUserById(this.uid).then(res => {
      this.list = res.data
      console.log("l ", this.list);

    })

    this.registerForm = new FormGroup({
      email: new FormControl(this.list.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      first_name: new FormControl(this.list.first_name, [Validators.required, Validators.minLength(5)]),
      last_name: new FormControl(this.list.last_name, [Validators.required, Validators.minLength(5)]),
      avatar: new FormControl(this.list.avatar, Validators.required)
    })
  }

  submit() {
    // console.log("f ", this.registerForm.value);

    this.service.edit(this.registerForm.value, this.uid).subscribe(res => {
      console.log("done");
      this.rout.navigateByUrl('');

    })

  }
}
