import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { ViewRecipesComponent } from './containers/view-recipes/view-recipes.component';
import { ViewRecipeComponent } from './containers/view-recipe/view-recipe.component';


@NgModule({
  declarations: [ViewRecipesComponent, ViewRecipeComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
