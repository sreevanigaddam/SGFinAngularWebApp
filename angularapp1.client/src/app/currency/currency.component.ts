import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencies = [
    { currencyname: 'US Dollar', currencycode: 'USD', date: new Date() },
    { currencyname: 'Euro', currencycode: 'EUR', date: new Date() },
    { currencyname: 'Japanese Yen', currencycode: 'JPY', date: new Date() },
    // Add more currency data here
  ];
  filteredCurrencies = this.currencies;
  searchQuery: string = '';
  searchCriteria: string = 'currencyname';

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }

  filterTable(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCurrencies = this.currencies.filter(currency => {
      if (this.searchCriteria === 'currencyname') {
        return currency.currencyname.toLowerCase().includes(query);
      } else if (this.searchCriteria === 'currencycode') {
        return currency.currencycode.toLowerCase().includes(query);
      } else if (this.searchCriteria === 'date') {
        return currency.date.toDateString().toLowerCase().includes(query);
      }
      return false;
    });
  }
}

