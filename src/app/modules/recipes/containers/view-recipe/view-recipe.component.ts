import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {
    recipe: any;
    constructor(private service: RecipeService, private route: ActivatedRoute) { }

    ngOnInit() {
        const resource = this.route.snapshot.paramMap.get('param');
        this.service.one(resource).subscribe((resp: any) => {
            this.recipe = resp.data;
            console.log(resp);
        });
    }

}
