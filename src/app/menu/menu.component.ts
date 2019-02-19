import { Component, OnInit } from '@angular/core';
import { MenuItem }  from '../menuitem';
import { MenuService } from '../menu.service';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];
  selectedType: string;
  foods = ["", "Appetizers", "Salads", "Pizza", "Pasta"];

  constructor(private menuService: MenuService) {
    
  }


  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
  }

  search(food: String): void {
    console.log("searching!");
    this.menuService.getMenu().subscribe(menu => {
      console.log(menu);
      menu.forEach(obj => {
        console.log(obj);
      })
    })
  }
}
