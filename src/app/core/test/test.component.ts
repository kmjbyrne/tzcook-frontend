import { Component, OnInit } from '@angular/core';
import { TestService } from './shared/services/test.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    data: any;
    constructor(private service: TestService) { }

    ngOnInit() {
        this.service.get().subscribe((resp: any) => {
            this.data = resp.data;
            console.log(resp.data);
        });
    }

}
