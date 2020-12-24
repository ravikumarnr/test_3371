import { Component, OnInit } from '@angular/core';
import { ScreeService } from './scree.service.ts';

@Component({
  selector: 'app-scree',
  templateUrl: './scree.component.html',
  styleUrls: ['./scree.component.scss'],
})

export class ScreeComponent implements OnInit {
    public email = {
        email: '',
    }

    constructor (
        private screeService: ScreeService,
    ) { }

    ngOnInit() {
    }
}