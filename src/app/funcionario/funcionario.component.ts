import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];
    
  ngOnInit() {
      this.items = [
          {label:'Pesquisa'},
          {label:'Produtos'},
      
      ];
  }

}
