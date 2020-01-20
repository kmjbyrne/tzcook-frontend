import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [TestComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        HttpClientModule
    ]
})
export class TestModule { }
