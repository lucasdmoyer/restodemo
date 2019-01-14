import { Injectable } from '@angular/core';
import { MenuItem } from './menuitem';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const menu = [
      { id: 1, name: 'Focaccia al rosmarino', description: 'Wood fired rosemary and garlic focaccia', price: 8.50, type: 'Appetizers' },
      { id: 2, name: 'Burratta con speck', description: 'Burratta cheese, imported smoked prok belly prosciutto, pached balsamic pear, crostini', price: 13.50, type: 'Appetizers' },
      { id: 3, name: 'Vongole con fagili e pancetta', description: 'Fresh local clams, white beans, pancetta', price: 14.5, type: 'Appetizers' },
      { id: 4, name: 'Carpaccio di manzo con barbaforte', description: 'Snake river farms beef carpaccio, parmigiano and grated horseradish', price: 13.5, type: 'Appetizers' },
      { id: 5, name: 'Calamari fritti', description: 'Salt and pepper fried calamari ', price: 12.5, type: 'Appetizers' },
      { id: 6, name: 'Piatto di prosciutto ', description: '24 months aged parma prosciutto plate  ', price: 13.50, type: 'Appetizers' },
      { id: 7, name: 'Bruschette ', description: 'Grape tomatoes, e.v. olive oil, garlic and basil over grilled bread ', price: 8.50, type: 'Appetizers' },
      { id: 8, name: 'Antipasto misto ', description: 'Antipasto array to chef’s whim ', price: 14.5, type: 'Appetizers' },
      { id: 9, name: 'Parmigiana di melenzane ', description: 'Traditional eggplant parmigiana with mozzarella and basil ', price: 10.5, type: 'Appetizers' },
      { id: 10, name: 'Formaggi italiani ', description: 'Italian cheeses and accompaniments', price: 10.5, type: 'Appetizers' },
    ];

    const pictures = [
      {id: 1, source: "../../assets/images/1.jpg" },
      {id: 2, source: "../../assets/images/2.jpg" },
      {id: 3, source: "../../assets/images/3.jpg" },
      {id: 4, source: "../../assets/images/4.jpg" },
      {id: 5, source: "../../assets/images/5.jpg" },
      {id: 6, source: "../../assets/images/6.jpg" },
      {id: 7, source: "../../assets/images/7.jpg" },
      {id: 8, source: "../../assets/images/8.jpg" },
      {id: 9, source: "../../assets/images/9.jpg" },
      {id: 10, source: "../../assets/images/10.jpg" },
      {id: 11, source: "../../assets/images/11.jpg" },
      {id: 12, source: "../../assets/images/12.jpg" },
      {id: 13, source: "../../assets/images/13.jpg" },
      {id: 14, source: "../../assets/images/14.jpg" },
      {id: 15, source: "../../assets/images/15.jpg" },
      {id: 16, source: "../../assets/images/16.jpg" },
    ]
    return {menu, pictures};
  }

  




  constructor() { }
}
