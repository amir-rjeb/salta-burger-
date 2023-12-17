import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private body: HTMLBodyElement | null = null;

  
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.body = document.querySelector('body');

    if (this.body) {
      this.body.style.overflow = 'hidden';
    }
  }
  
  redurective2(){
    this.router.navigate(['/auth/login'])
  }

}
