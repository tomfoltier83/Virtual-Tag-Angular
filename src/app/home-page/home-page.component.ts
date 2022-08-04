import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomePageComponent implements OnInit {
  logo:string = 'assets/img/logo.svg';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
