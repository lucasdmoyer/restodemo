import { Component, OnInit } from '@angular/core';
import { MenuItem }  from '../menuitem';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[]; 

  constructor(private menuService: MenuService) {
    
  }


  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
  }
}
