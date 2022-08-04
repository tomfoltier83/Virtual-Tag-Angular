import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-signin',
  template: `
    <body>
    <div><img [src]="logo"></div>
    <h1>Connectez-vous </h1>
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
      <div class="mb-3">
        <label class="form-label">Adresse e-mail</label>
        <input type="email" class="form-control" ngModel name="email">
      </div>
      <div class="mb-3">
        <label class="form-label">Mot de passe</label>
        <input type="password" class="form-control" ngModel name="password">
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <a href="" class="footer__button" style="padding-top: 30px">Conditions d'utilisation</a>
    <a href="" class="footer__button">Need help</a>
  </body>
  `,
  styles: [
    'body {background: linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(83,83,83,1) 100%); display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100vh}',
    'h1 {color: white; font-family: Dosis; margin-bottom: 30px; font-size: 25px}',
    'img { height: 120px; margin-top: 30px}',
    'label {color: white; display: block; text-align: center;}',
    'button {display: block; text-align: center; margin-bottom: 30px; background-image: linear-gradient(150deg, rgba(255,138,0,1) 0%, rgba(239,215,0,1) 100%); border: none; color: white; margin: auto; padding: 10px 20px; border-radius: 30px; margin-top: 30px}',
    'p {color: white; font-size: 3vh; margin-bottom: 0;}',
    '.footer__button{color: white; padding-bottom: 30px;}'
  ]
})
export class SigninComponent implements OnInit {
  logo:string = 'assets/img/logo.svg';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const auth = getAuth();
    const email = form.value['email'];
    const password = form.value['password'];
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.router.navigate(['/home'])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

}
