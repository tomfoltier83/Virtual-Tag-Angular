import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'virtual-tag';
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBCCl-xvjkJ-S-gK9DhIewsJYpEMXAHTAg",
      authDomain: "virtual-tag-6eb92.firebaseapp.com",
      databaseURL: "https://virtual-tag-6eb92-default-rtdb.firebaseio.com",
      projectId: "virtual-tag-6eb92",
      storageBucket: "virtual-tag-6eb92.appspot.com",
      messagingSenderId: "268850849904",
      appId: "1:268850849904:web:3f281c24b45ba31a056cb5"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
}


