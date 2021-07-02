import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard',
      icon: 'list'
    },
    {
      title: 'Perfil',
      url: '/menu/perfil',
      icon: 'person'
    },
    {
      title: 'Favoritos',
      url: '/menu/favorito',
      icon: 'bookmark'
    }
  ]

  selectedPath = ''

  constructor(
    private router: Router
  ) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      if(event.url != undefined){
        this.selectedPath = event.url
      }
    })

  }

  ngOnInit() {
  }

}
