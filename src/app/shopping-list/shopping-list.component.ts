// import { Component, OnInit } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingService } from './shopping.service';

// @Component({
//   selector: 'app-shopping-list',
//   templateUrl: './shopping-list.component.html',
//   styleUrls: ['./shopping-list.component.scss'],
 
// })
// export class ShoppingListComponent implements OnInit {
//     ingredients: Ingredient[];
//   constructor(private shoppingService: ShoppingService) { }

//   ngOnInit() {
//     this.ingredients= this.shoppingService.getIngredients();
//     this.shoppingService.ingredientsChanged
//     .subscribe(
//       (ingredients: Ingredient[]) =>{
//       this.ingredients= this.ingredients;
//     }
//     );
// }
//   }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub= this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(){
    this.igChangedSub.unsubscribe();
    
  }
}
