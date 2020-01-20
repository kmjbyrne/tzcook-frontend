import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRecipesComponent } from './containers/view-recipes/view-recipes.component';
import { ViewRecipeComponent } from './containers/view-recipe/view-recipe.component';


const routes: Routes = [
    {
        path: '',
        component: ViewRecipesComponent
    },
    {
        path: 'recipe/:param',
        component: ViewRecipeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
