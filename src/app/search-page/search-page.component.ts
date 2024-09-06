import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  books: any[] = [];

  ngOnInit(): void {
    const numberOfBooks = 5; // Adjust the number of books here
    this.books = Array(numberOfBooks).fill({});
  }

}
