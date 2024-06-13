import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu.interfaces';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  public sidebarItems: Menu[] = [
    {
      label: 'Listado',
      icon: 'label',
      url: '/heroes/list'
    },
    {
      label: 'Agregar',
      icon: 'add',
      url: '/heroes/new-hero'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: '/heroes/search'
    }
  ]

}
