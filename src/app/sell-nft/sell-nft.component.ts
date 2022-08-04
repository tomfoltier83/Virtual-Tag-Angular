import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-nft',
  templateUrl: './sell-nft.html',
  styleUrls: ['./sell-nft.css']
})
export class SellNftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
