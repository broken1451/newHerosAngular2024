import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu.interfaces';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent implements OnInit {

  
  constructor(private authService: AuthService, private router: Router) { }

  get currentUser(){
    return this.authService.currentuser
  }

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
  ];

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
