import { Injectable } from '@angular/core';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://example.com/api';

  async getData(): Promise<Data[]> {
    const response = await fetch(this.apiUrl);
    return await response.json();
  }
}