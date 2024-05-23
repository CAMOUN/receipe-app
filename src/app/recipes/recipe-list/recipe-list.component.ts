import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Crêpes", "A bunch of crêpes", "https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?"),
    new Recipe("Crêpes", "A bunch of crêpes", "https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?")
  ];



}
