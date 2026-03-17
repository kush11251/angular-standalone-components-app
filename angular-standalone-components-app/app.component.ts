import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Data } from './data.model';

@Component({
  selector: 'app-root',
  template: '<ul><li *ngFor="let item of data">{{ item.name }}</li></ul>'
})
export class AppComponent {
  data: Data[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.data = await this.dataService.getData();
  }
}