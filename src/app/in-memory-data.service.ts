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
      { id: 11, name: 'Passato di verdure ', description: 'Seasonal vegetarian puree soup, e.v. olive oil drizzle', price: 7.5, type: 'Salads' },
      { id: 12, name: 'Pasta e fagioli ', description: 'Traditional tuscan bean and pasta soup ', price: 9.5, type: 'Salads' },
      { id: 13, name: 'Cuore di romana ', description: 'Romaine heart, caesar dressing, shaved parmigiano and wood-fired crouton ', price: 8.5, type: 'Salads' },
      { id: 14, name: 'Lattuga, nocciole e caprino', description: 'Butter lettuce, goat cheese and toasted hazelnuts', price: 9.5, type: 'Salads' },
      { id: 15, name: 'Rughetta al granchio', description: 'Rucola, reggiano crisp, fresh dungeness crab, lemon dressing', price: 12.5, type: 'Salads' },
      { id: 16, name: 'Insalata verde al balsamico', description: 'Baby lettuce with balsamic dressing', price: 8.5, type: 'Salads' },
      { id: 17, name: 'Margherita', description: 'Tomato, basil, mozzarella, parmigiano ', price: 13.5, type: 'Pizza' },
      { id: 18, name: 'Marinara', description: 'Tomato, garlic, oregano', price: 12.5, type: 'Pizza' },
      { id: 19, name: 'Melina', description: 'Black truffles, mozzarella, wild mushrooms, parmigiano', price: 16, type: 'Pizza' },
      { id: 20, name: 'Bianca', description: 'Mozzarella, ricotta, gorgonzola, olive oil, rosemary, parmigiano', price: 13.5, type: 'Pizza' },
      { id: 21, name: 'Calzone', description: 'Ricotta, mozzarella, salame, parmigiano', price: 16, type: 'Pizza' },
      { id: 22, name: 'Prosciutto, caprino e rughetta', description: 'Tomato, goat cheese, mozzarella, rucola, prosciutto crudo, parmigiano', price: 17, type: 'Pizza' },
      { id: 23, name: 'Siciliana', description: 'Pistachio pesto base, mozzarella, italian chicken sausage, arugula, lemon dressing', price: 16.5, type: 'Pizza' },
      { id: 24, name: 'Corydon', description: 'Pepperoni, provolone, mozzarella, parmigiano', price: 14.5, type: 'Pizza' },
      { id: 25, name: 'Calzone vegetariano', description: 'Ricotta, mushrooms and spinach, mozzarella, parmigiano', price: 16, type: 'Pizza' },
      { id: 26, name: 'Bucatini delicati', description: 'Bucatini, baby manzo meatballs, pancetta, fresh mozzarella, basil, homemade sugu', price: 17, type: 'Pasta' },
      { id: 27, name: 'Ravioli fatti in casa', description: 'Homemade ravioli, filled with kale, roasted garlic, caramelized onions and ricotta in salsa rosa', price: 19, type: 'Pasta' },
      { id: 28, name: 'Lasagnette', description: 'Layered pasta with ground beef and pork, béchamel sauce', price: 19, type: 'Pasta' },
      { id: 29, name: 'Spaghetti alla Vongole', description: 'Manila clams, grape tomatoes, aglio e olio', price: 19, type: 'Pasta' },
      { id: 30, name: 'Gnocchi di patate con pomodoro e mozzarella', description: 'Potato gnocchi, imported san marzano tomatoes, mozzarella, parmigiano', price: 16.5, type: 'Pasta' },
      { id: 31, name: 'Fettucine alla bolognese', description: 'omemade fettucine, veal, pork, and beef bolognese', price: 17, type: 'Pasta' },
      { id: 32, name: 'Spaghetti alla diavola con aragosta dell' , description: 'Grilled cold waters lobster tail over spaghetti with spicy organic cherry tomato sauce and fresh manila clams', price: 29, type: 'Pasta' },
      

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
