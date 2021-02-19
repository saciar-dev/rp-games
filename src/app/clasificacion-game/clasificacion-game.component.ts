import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clasificacion-game',
  templateUrl: './clasificacion-game.component.html',
  styleUrls: ['./clasificacion-game.component.css']
})
export class ClasificacionGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate([''])
  }

}
