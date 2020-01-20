import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CoreComponent } from './core.component';


const routes: Routes = [{
    path: '',
    component: CoreComponent,
    children: [
        {
            path: '',
            loadChildren: () => import('../modules/recipes/recipes.module').then(m => m.RecipesModule)
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
