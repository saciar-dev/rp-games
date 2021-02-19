import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aritmetica-game',
  templateUrl: './aritmetica-game.component.html',
  styleUrls: ['./aritmetica-game.component.css']
})
export class AritmeticaGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['']);
  }

}
