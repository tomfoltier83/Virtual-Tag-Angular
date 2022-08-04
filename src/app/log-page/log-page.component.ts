import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-page',
  template: `
  <body>
    <div><img [src]="logo"></div>
    <h1>ELEVATE YOUR GRAFFITI.</h1>
    <a routerLink="signin" class="log"><p>Se connecter</p></a>
    <a routerLink="signup" class="log"><p>Créer un compte</p></a>
      <a href="" class="footer__button" style="padding-top: 30px">Conditions d'utilisation</a>
      <a href="" class="footer__button">Need help</a>
  </body>
  `,
  styles: [
    'body {background: linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 100%); display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100vh}',
    'h1 {color: white; font-family: Dosis; letter-spacing: 8px; margin: 30px 0px; font-size: 25px}',
    'img { height: 120px; margin-top: 30px}',
    '.log {text-decoration: none; display: block; border: solid 3px; padding: 20px; text-align: center; width: 300px; margin-bottom: 30px; border-image: linear-gradient(150deg, rgba(255,138,0,1) 0%, rgba(239,215,0,1) 100%); border-image-slice: 1;}',
    'p {color: white; font-size: 3vh; margin-bottom: 0;}',
    '.footer__button{color: white; padding-bottom: 30px;}'
  ]
})
export class LogPageComponent implements OnInit {
  logo:string = 'assets/img/logoname.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
