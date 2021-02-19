import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irMemoryGame(){
    this.router.navigate(['memory']);
    
  }

  irSecuenciaGame(){
    this.router.navigate(['secuencia']);
  }

  irClasificarGame(){
    this.router.navigate(['clasificacion']);
  }

  irAritmeticaGame(){
    this.router.navigate(['aritmetica']);
  }

}
