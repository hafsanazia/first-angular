// import { Ingredient } from '../shared/ingredient.model';
// import {EventEmitter, ViewChild, ElementRef} from '@angular/core';

// export class ShoppingService { 
//     ingredientsChanged= new EventEmitter<Ingredient>();
//    private ingredients: Ingredient[] = [
//         new Ingredient('Apple', 5),
//         new Ingredient('Tomatoes', 10),
//       ];
     

//     getIngredient(){
//         return this.ingredients.slice();
//     }

//     addIngredient(ingredient: Ingredient){
//         this.ingredients.push(ingredient);
//         // this.ingredientChanged.emit(this.ingredients.slice());
// }
// addIngredients(ingredients: Ingredient[]) {
//   // for (let ingredient of ingredients) {
//   //   this.addIngredient(ingredient);
//   // }
//   this.ingredients.push(...ingredients);
//   this.ingredientsChanged.emit(this.ingredients.slice());
// }
// }
import {Subject} from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
