import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secuencia-game',
  templateUrl: './secuencia-game.component.html',
  styleUrls: ['./secuencia-game.component.css']
})
export class SecuenciaGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['']);
  }
}
