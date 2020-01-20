import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
    selector: 'app-view-recipes',
    templateUrl: './view-recipes.component.html',
    styleUrls: ['./view-recipes.component.scss']
})
export class ViewRecipesComponent implements OnInit {
    data: any;
    constructor(private service: RecipeService) { }

    ngOnInit() {
        this.service.get().subscribe((resp: any) => {
            console.log(resp);
            this.data = resp.data;
        });
    }

}
