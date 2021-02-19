import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate([''])
  }

}
