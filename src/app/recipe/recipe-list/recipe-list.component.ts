import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Chocolate",
      "Damn sweet, damn good",
      "https://www.livewellbakeoften.com/wp-content/uploads/2019/08/Fudge-Recipe-36-s-copy.jpg"
    ),
    new Recipe(
      "Hungarian Chicken Paprikash",
      "Curry❤️",
      "https://unsophisticook.com/wp-content/uploads/2017/11/Hungarian-Chicken-Paprikash-Recipe-720x540.jpg"
    )
  ]
}
