import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AtomsModule } from '@kbpc/atoms';
import { CoreComponent } from './core.component';
import { TestComponent } from './test/test.component';


@NgModule({
    declarations: [
        CoreComponent,
        TestComponent
    ],
    imports: [
        CommonModule,
        AtomsModule,
        CoreRoutingModule
    ],
    bootstrap: [CoreComponent]
})
export class CoreModule { }
