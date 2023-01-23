import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  list: any = {}

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.list().then(res => {
      console.log("S ", res.data);
      this.list = res.data
    })
  }
}
