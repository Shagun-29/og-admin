import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Script} from '../shared/services/script.service';
import {Router} from "@angular/router";

@Component({
  selector: 'og-admin-home',
  template: `
    <og-toolbar></og-toolbar>
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None,
  // styles: ['@import "https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css";'],
  styleUrls: ['./admin.component.css', './jquery.dataTables.min.css']
})

export class AdminComponent implements OnInit {

  constructor(private _script: Script, private router: Router) {
  }

  ngOnInit() {
    this._script.load('daterangepicker').then((data) => {
      console.log(data);
    });
  }
}

