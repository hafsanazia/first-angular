import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
      )
  ];

  constructor(private slService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

// import {Recipe} from './recipe.model';
// import { EventEmitter, Injectable } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';
// import {ShoppingService} from '../shopping-list/shopping.service';

// @Injectable()
// export class RecipeService {
//     recipeSelected = new EventEmitter<Recipe>();

//     private recipes: Recipe[] = [
//         new Recipe(
//           'Tasty Schnitzel',
//           'A super-tasty Schnitzel - just awesome!',
//           'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
//           [
//             new Ingredient('Meat', 1),
//             new Ingredient('French Fries', 20)
//           ]),
//         new Recipe('Big Fat Burger',
//           'What else you need to say?',
//           'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//           [
//             new Ingredient('Buns', 2),
//             new Ingredient('Meat', 1)
//           ])
//       ];

//     // private recipes: Recipe[] = [
//     //     new Recipe(
//     //     'A tasty burger',
//     //     'A super tasty peri peri chicken burger', 
//     //     'https://amp.businessinsider.com/images/5c420211b492cb5cdb1d88d4-750-501.jpg',
//     //     [new Ingredient('bun', 2),new Ingredient('meat', 1)]),
//     //     new Recipe('Another test Recipe', 
//     //     'this is a samply test', 
//     //     'https://thumbs.dreamstime.com/z/chicken-strips-fries-combo-2607059.jpg',
//     //     [
//     //         new Ingredient('bun', 2),
//     //         new Ingredient('meat', 1)
//     //     ]),
      
//     //   ];

//     constructor(private slService: ShoppingService) {}

//       getRecipes() {
//           return this.recipes.slice();
//       }
//       addIngredientsToShoppingList(ingredients: Ingredient[]) {
//         this.slService.addIngredients(ingredients);
//       }
// }